import app from "./app.js"
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT

app.listen(PORT,(req,res)=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})