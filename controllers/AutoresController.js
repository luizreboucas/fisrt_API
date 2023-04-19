import express from "express"
import autores from "../models/Autor.js"

export default class AutoresController{
    static getAutores = async(req,res)=>{
        try{
            const result = await autores.find({})
            res.status(200).json(result)

        }catch(err){

        }
    }

    static postAutor = async(req,res)=>{
        try{

            const novoAutor = new autores({
                nome: req.body.nome,
                nacionalidade: req.body.nacionalidade
            })
            novoAutor.save()
            res.send("novo autor cadastrado")


        }catch(err){
            console.log(err)
        }
    }
    static updateAutor = async(req,res)=>{
        const {nome, nacionalidade} = req.body
        try{
            const novoAutor = {
                nome,
                nacionalidade
            }
            await autores.findByIdAndUpdate(req.params.id, novoAutor)
            res.send("autor atualizado")

        }catch(e){
            console.log(e)
        }
    }
    static deleteAutor = async(req,res)=>{
        await autores.findByIdAndDelete(req.params.id)
        res.send("livro excluído")
    }
}