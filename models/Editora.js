import mongoose from "mongoose"

const editoraSchema = new mongoose.Schema({
    nome: {type: String},
    endereco: {type: String}
})

const editoras = mongoose.model("editoras", editoraSchema)

export default editoras