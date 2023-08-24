const { listarTodasCategorias } = require("./listarTodasCategorias")
const { listarUmaCategoria } = require("./listarUmaCategoria")
const { postCategoria } = require("./postCategoria")
const {deleteCategoria}= require("./deleteCategoria")

module.exports = {
    listarTodasCategorias: listarTodasCategorias,
    listarUmaCategoria : listarUmaCategoria,
    postCategoria: postCategoria,
    deleteCategoria: deleteCategoria
}