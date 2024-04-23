"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express'); //Importa a lib express
var app = express(); //Inicia a lib
app.use(express.json());
app.get("/", function (req, res) {
    res.send("Bem vindo ao curso de TypeScript!");
});
function criaPet(id, nome, especie, idade, adotado) {
    return {
        id: id,
        nome: nome,
        especie: especie,
        idade: idade,
        adotado: adotado,
    };
}
var id = 0;
function geraId() {
    id = id + 1;
    return id;
}
app.post("/pets", function (req, res) {
    var pet1 = criaPet(geraId(), "Bolt", "cachorro", 3, false);
    var pet2 = criaPet(geraId(), "Mel", "gato", 2, false);
    res.send([pet1, pet2]);
});
exports.default = app;
