import express, { Express, Request, Response , Application } from 'express';
import { PrismaClient } from '@prisma/client';
import UserRouter from "./routes/user.route";
import FarmerRouter from "./routes/farmer.route";

 export const prisma = new PrismaClient();

const app = express()

async function main() {
  }


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Register API routes
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/farmer ", FarmerRouter);

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
  
