function primeiroElemento(arr) {
    return arr[0];
}
var numeros = primeiroElemento([1, 2, 3]);
var palavras = primeiroElemento(['olá', 'mundo']);
console.log(numeros);
console.log(palavras);
var CaixaNome = /** @class */ (function () {
    function CaixaNome(conteudo) {
        this.Conteudo = conteudo;
    }
    return CaixaNome;
}());
var Pessoa2 = /** @class */ (function () {
    function Pessoa2(nome) {
        this.nome = nome;
    }
    return Pessoa2;
}());
var pessoa4 = new Pessoa2("João");
var caixa = new CaixaNome(pessoa4);
console.log(caixa.Conteudo.nome);
