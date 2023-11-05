import express, { Express, Request, Response , Application } from 'express';
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.get('/', async (req: Request, res:Response) => {
    // await res.json().end()
    return res.send("Hello world");
  })

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`server.js listening on ${port}`)
})