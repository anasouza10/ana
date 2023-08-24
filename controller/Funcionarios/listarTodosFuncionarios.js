const { conexaoBanco } = require("../../conexaoDb/conexaoDB");

exports.listarTodosFuncionarios = (req, res) => {
    conexaoBanco.all("SELECT * FROM FUNCIONARIOS", (err, rows) => {
        res.send(rows)
    })
}
