import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

mongoose.connect(process.env.BD_CONNECTION)


const db = mongoose.connection

export default db