import express, { Express, Request, Response , Application } from 'express';
import { PrismaClient } from '@prisma/client';
import UserRouter from "./routes/user.route";

 export const prisma = new PrismaClient();

const app = express()

async function main() {
  }


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Register API routes
app.use("/api/v1/user", UserRouter);

  // Catch unregistered routes
  app.all("*", (req: Request, res: Response) => {
    res.status(404).json({ error: `Route ${req.originalUrl} not found` });
  });


app.get('/', async (req: Request, res:Response) => {
    // await res.json().end()
    return res.send("Hello world");
  })

const port = process.env.PORT || 8000
app.listen(port, () => {
  console.log(`server.js listening on ${port}`)
})
main()
  .then(async () => {
    await prisma.$connect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  });
  
// import express, { Express, Request, Response , Application } from 'express';
// import { PrismaClient } from '@prisma/client';
// export const prisma = new PrismaClient();
// const app = express();

// app.use(express.json());

// // Define routes for CRUD operations

// // Create a new User
// app.post('/user', async (req: Request, res: Response) => {
//   try {
//     const user = await prisma.user.create({
//       data: req.body,
//     });
//     res.json(user);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// // Retrieve all Users
// app.get('/users', async (req:Request, res:Response) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// // Retrieve a User by ID
// app.get('/users/:id', async (req:Request, res:Response) => {
//   const { id } = req.params;
//   const user = await prisma.user.findUnique({
//     where: { id: parseInt(id) },
//   });
//   if (user) {
//     res.json(user);
//   } else {
//     res.status(404).json({ error: 'User not found' });
//   }
// });

// // Update a User by ID
// app.put('/users/:id', async (req:Request, res:Response) => {
//   const { id } = req.params;
//   try {
//     const updatedUser = await prisma.user.update({
//       where: { id: parseInt(id) },
//       data: req.body,
//     });
//     res.json(updatedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// // Delete a User by ID
// app.delete('/users/:id', async (req:Request, res:Response) => {
//   const { id } = req.params;
//   const deletedUser = await prisma.user.delete({
//     where: { id: parseInt(id) },
//   });
//   res.json(deletedUser);
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// })
