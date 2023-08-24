const router = require("express").Router();
const { application } = require("express");
const controller = require ("../controller/categorias/_CategoriasControllerIndex");

router.get("/ListarTodasCategorias", controller.listarTodasCategorias);
router.get("/ListarUmaCategorias", controller.listarUmaCategoria);
router.post("/postCategoria", controller.postCategoria);
router.delete("/deleteCategoria", controller.deleteCategoria);

// http://localhost:4001/apiMercado/Categorias/ListarTodasCategorias


module.exports = router;