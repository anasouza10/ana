const { conexaoBanco } = require("../../conexaoDb/conexaoDB");

exports.listarTodosClientes = (req, res) => {
    conexaoBanco.all("SELECT * FROM CLIENTES", (err, rows) => {
        res.send(rows)
    })
}