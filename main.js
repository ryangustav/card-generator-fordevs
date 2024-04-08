//Imports
const path = require("path");
const express = require("express");
const gerarCartao = require(`./util/gerarCartao.js`)
//Variaveis
const app = express();
//Servidor
app.get("/", (req, res) => {
res.status(404);
res.json({ message: 'bad request', code: '404'})
})

app.get('/cc-gen', async (req, res) => {
//pegando a bin
const { bin } = req.query;
if (bin.length > 6 || bin.length < 6) return res.status(400);

//gerando os numeros
const cartoes = await gerarCartao(bin);
res.status(200)
res.json({ code: 200, cartoes: cartoes})
})

// Iniciando o servidor
app.listen(3000, async data => {
console.log(`Servidor iniciado`)
})
