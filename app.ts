import express, {Request, Response} from "express"

const app = express()

app.use(express.json())


app.get("/", (request:Request, response:Response)=>{
  console.log(`rodando url-shortener`)
})


export default app
