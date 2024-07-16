import { Hono } from 'hono'
import { userRouter } from './routes/user'
import { blogRouter } from './routes/blog'
import { cors } from 'hono/cors'


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string
    JWT_SECRET: string
	}
}>();

app.use('/*', cors())
// Add middleware for protected routes
// app.use('/api/v1/blog/*', async (c, next) => {

//   // the || part is if the token is empty/non-existent.
//   const header = c.req.header("authorization") || "";
//   const token = header.split(" ")[1];
//   const decoded = await verify(token, c.env.JWT_SECRET);
//   if (decoded) {
//     c.set('userId', decoded.id);
//     await next();
//   } else {
//     c.status(403);
//     return c.json({
//       error: "Unauthorized"
//     })
//   }
// })
app.route('/api/v1/user', userRouter);
app.route('/api/v1/blog', blogRouter);


export default app
