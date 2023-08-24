const express = require("express");

const app = express();
const PORT = 4001

app.use(require("./routes/_routesIndex"));

app.listen (PORT, () => {
console.log(`Servidor rodando em: http://localhost:${PORT}`)

});