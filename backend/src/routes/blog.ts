import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { verify } from 'hono/jwt';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    },
    Variables: {
        userId: string
    }
}>();

// all requests to this route are authenticated
blogRouter.use('/*', async (c, next) => {
  const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	const token = jwt.split(' ')[1];
	const payload = await verify(token, c.env.JWT_SECRET);
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set('userId', payload.id as string);
	await next()
})

// Create a blog
blogRouter.post('/', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    
      }).$extends(withAccelerate())
    
      const body = await c.req.json();

      const post = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: Number(c.get('userId')),
        }
      })
    return c.json({
        "id": post.id
    })
  })
  
  
  // Update a blog (very similar to the post counterpart)
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    
      }).$extends(withAccelerate())
    
      const body = await c.req.json();

      const post = await prisma.post.update({
        where: {
            id: body.id,
           // authorId: c.get('userId'),
        },
        data: {
            title: body.title,
            content: body.content,
        }
      })
    return c.json({
        "id": post.id
    })
  })



blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    
      }).$extends(withAccelerate())

      const posts = await prisma.post.findMany({
        select: {
          content: true,
          title: true,
          id: true,
          author: {
            select: {
              name: true
            }
          }
        }
      });
    return c.json({
        posts
    })

  })
  
  // Get a blog
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    
      }).$extends(withAccelerate())
    


      try {
        const post = await prisma.post.findFirst({
            where: {
                id: Number(c.req.param("id"))
            },
            select: {
              content: true,
              title: true,
              id: true,
              author: {
                select: {
                  name: true
                }
              }
            }
          })
        return c.json({
            post
        })
      } catch (e) {
        c.status(411);
        return c.json({
            "error": "Error while fetching post!"
        })
      }
  })
  
  

