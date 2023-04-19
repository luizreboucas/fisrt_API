import express from "express"
const router = express.Router()
import EditorasController from "../controllers/EditorasController.js"

router
    .get("/editoras",EditorasController.getEditoras)
    .post("/editoras",EditorasController.postEditora)

export default router