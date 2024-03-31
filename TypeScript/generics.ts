function primeiroElemento<T>(arr: T[]): T{
    return arr[0];
}

let numeros = primeiroElemento([1,2,3]);
let palavras = primeiroElemento(['olá','mundo']);

console.log(numeros);
console.log(palavras);


interface TemNome {
    nome: string;
}

class CaixaNome<T extends TemNome> {
    Conteudo: T;

    constructor(conteudo: T){
        this.Conteudo = conteudo;
    }
}

class Pessoa2 implements TemNome {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
}

let pessoa4 = new Pessoa2("João");
let caixa = new CaixaNome(pessoa4);

console.log(caixa.Conteudo.nome);

