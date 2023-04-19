import express from "express"
import cors from "cors"
import livroRoutes from "../routes/livrosRoutes.js"
import autoresRoutes from "../routes/autoresRoutes.js"
import editorasRoutes from '../routes/editorasRoutes.js'

const routes = (app)=>{
    app.route("/").get((req,res)=>{
        res.status(200).json("curso de node")
    })

    app.use(
        express.json(),
        cors(),
        livroRoutes,
        autoresRoutes,
        editorasRoutes


    )
}

export default routes