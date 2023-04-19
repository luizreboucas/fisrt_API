import express from "express"
import editoras from "../models/Editora.js"

export default class EditorasController{
    static getEditoras = async(req,res)=>{
        try {
            const result = await editoras.find({})
            res.status(200).json(result)
            
        } catch (error) {
            console.log(error)
        }
    }

    static postEditora = (req,res)=>{
       const {nome,endereco} = req.body
       const novaEditora = {
            nome,
            endereco
       }
       editoras.create(novaEditora)
       res.status(200).send("editora incluída com sucesso")
    }
}