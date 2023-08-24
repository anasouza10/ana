const {conexaoBanco} = require ("../../conexaoDB/conexaoDB");

exports.postCategoria = (req, res) => {
    if(!req.body?.nome)
    return res.status(400).json({ msg:"corpo mal formado ou informações incorreta"});

    conexaoBanco.run(" INSERT INTO CATEGORIAS(NOME) VALUES (?)"
[req.body.nome],
(err) => {
    if (err)
    return res.status(500).json({msg: "erro ao inserir no banco"});
    res.status(201).json({msg: "criado com sucesso!"})
})
}                 