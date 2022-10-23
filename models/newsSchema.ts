import mongoose from "mongoose"; 

export const NewsSchema = new mongoose.Schema({
    titulo: {type: String},
    chapeu: {type: String},
    texto: {type: String},
    autor: {type: String},
    imagem: {type: String},
    dataPublicacao: {type: String},
    tags: {type: String},
    link: {type: String},
    ativo: {type: String},
})