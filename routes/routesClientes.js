const router = require("express").Router();
const controller = require ("../controller/Clientes/_ClientesControllerIndex");

router.get("/ListarTodosClientes", controller.listarTodosClientes);
router.get("/ListarUmCliente", controller.listarUmCliente);

module.exports = router;