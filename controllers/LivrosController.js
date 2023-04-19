import livros from "../models/Livro.js"

export default class livrosController{

    static getLivros = (req,res)=>{
   
        livros.find()
            .populate("autor")
            .populate("editora")
            .exec((err, livros)=>{
                if (err){
                    console.log(err)
                }else{
                    res.status(200).json(livros)
                }
            })
        
    }
    static getLivro = async(req,res) => {
        try{
            await livros.findById(req.params._id)
            res.status(200).send(livros)
        }catch(e){
            console.log(e)
        }
    }

    static postLivro = async(req,res)=>{

        try{
            const novoLivro = new livros({
                titulo: req.body.titulo,
                autor: req.body.autor,
                editora: req.body.editora,
                numeroPaginas: req.body.numeroPaginas
            })
            novoLivro.save()
            
            res.send("livro adicionado")
        }catch(err){
            return next(error)
            res.send("livro nao adicionado")
        }
        
    }

    static updateLivro = async(req,res)=>{
        const {titulo,autor,editora,numeroPaginas} = req.body
        try{
            const novoLivro = {
                titulo,
                autor,
                editora,
                numeroPaginas
            } 
            await livros.findByIdAndUpdate(req.params.id, novoLivro)
            res.send("livro atualizado")
        }catch(e){
            console.log(e)
        }
    }

    static deleteLivro = async(req,res)=>{
        try{
            await livros.findByIdAndDelete(req.params.id)
            res.status(201).send("livro deletado")
    
        }catch(e){
            console.log(e)
        }
    }


}

