import LivrosController from "../controllers/LivrosController.js"

import express from "express"
const router = express.Router()

router
    .get("/livros",LivrosController.getLivros)  
    .get("livros/:id", LivrosController.getLivro) 
    .post("/livros", LivrosController.postLivro)
    .put("/livros/:id",LivrosController.updateLivro)
    .delete("/livros/:id", LivrosController.deleteLivro)


export default router