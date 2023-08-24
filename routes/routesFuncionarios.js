const router = require("express").Router();
const controller = require ("../controller/Funcionarios/_FuncionariosControllerIndex");

router.get("/ListarTodosFuncionarios", controller.listarTodosFuncionarios);
router.get("/ListarUmFuncionario", controller.listarUmFuncionario);

module.exports = router;
