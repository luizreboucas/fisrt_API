import express from "express"
import cors from "cors"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
const app = express()

db.on("error", console.log.bind(console, "erro de conexão"))
db.once("open",()=>{
    console.log("conectado ao banco de dados")
})

routes(app)






export default app