const { conexaoBanco } = require("../../conexaoDb/conexaoDB");

exports.deleteCategoria = (req, res) => {
if(!req.query?.id)
    res.status(400).json({msg:"faltou "});

    conexaoBanco.run("DELETE FROM CATEGORIAS WHERE CATEGORIA_ID = ? ", [req.query.id], (err, rows) => {
        if (err){
            console.log(err);  
            return res.status(500).json({msg: "erro  no banco"});
        }
        res.status(200).json({msg: "feito com sucesso!"})
    })
    }            



































