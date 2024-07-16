import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { Hono } from 'hono';
import { sign } from 'hono/jwt';
import {signUpInput} from "@ashea10/medium-common/src"

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
    const { success } = signUpInput.safeParse(body);
    if (!success) {
      c.status(411);
      return c.json({
        message: "Invalid Input!"
      })
    }
  
    try {
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name: body.name
        }
      })
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      
      return c.json({
        jwt: jwt
      })
    } catch (e) {
      c.status(403)
      return c.json({
        error: "Error While Signing Up, Please Try Again!"
      })
    }
  
  
  })
  
  userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
  
    const body = await c.req.json();
  
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
        password: body.password
      }
    })
  
    if (!user) {
      c.status(403);
      return c.json({
        error: "User does NOT exist!"
      })
    }
  
    const token = await sign({id: user.id}, c.env.JWT_SECRET);
    return c.json({
      jwt: token
    })
    
  
  })