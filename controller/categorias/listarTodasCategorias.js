const { conexaoBanco } = require("../../conexaoDb/conexaoDB");

exports.listarTodasCategorias = (req, res) => {
    conexaoBanco.all("SELECT * FROM CATEGORIAS", (err, rows) => {
        if(err)
            console.log(err.message)
        
        res.status(200).json({
            resposta: rows
        })
    })
}


// http://localhost:4001/apiMercado/Categorias/ListarTodasCategorias