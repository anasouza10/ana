const express = require("express");
// require("dotenv").config();
const app = express();
const PORT = 4001
//const port = process.env.PORTA;

app.use(require("./routes/_routesIndex"));

app.listen (PORT, () => {
console.log(`Servidor rodando em: http://localhost:${PORT}`)

});