import  express from "express";
import AutoresController from "../controllers/AutoresController.js";

const router = express.Router()

router
    .get("/autores", AutoresController.getAutores)
    .post("/autores", AutoresController.postAutor)
    .put("/autores/:id",AutoresController.updateAutor)
    .delete("/autores/:id",AutoresController.deleteAutor)


export default router