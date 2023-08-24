const router = require("express").Router();
const rotaPadrao = "/apiMercado/";

// http://localhost:4001/apiMercado/Categorias

router.use(rotaPadrao+"Categorias", require ("./routesCategorias"));
// router.use(rotaPadrao, (req, res) => {res.sendStatus(418)});
router.use(rotaPadrao+"Funcionarios", require ("./routesFuncionarios"));

router.use(rotaPadrao+"Clientes", require ("./routesClientes"));


module.exports = router;