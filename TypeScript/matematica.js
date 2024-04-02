var matematicaBasica;
(function (matematicaBasica) {
    function somar(a, b) {
        return a + b;
    }
    matematicaBasica.somar = somar;
    function subtrair(a, b) {
        return a - b;
    }
    matematicaBasica.subtrair = subtrair;
})(matematicaBasica || (matematicaBasica = {}));
var matematicaAvancada;
(function (matematicaAvancada) {
    function exponenciar(base, expoente) {
        return Math.pow(base, expoente);
    }
    matematicaAvancada.exponenciar = exponenciar;
})(matematicaAvancada || (matematicaAvancada = {}));
console.log(matematicaBasica.somar(5, 3));
console.log(matematicaBasica.subtrair(5, 3));
console.log(matematicaAvancada.exponenciar(5, 3));
