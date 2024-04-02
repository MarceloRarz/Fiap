namespace matematicaBasica {
export function somar(a: number, b: number){
    return a + b;
}

export function subtrair(a: number, b: number){
    return a - b;
}

}

namespace matematicaAvancada {
    export function exponenciar(base: number, expoente: number): number {
        return Math.pow(base, expoente);
    }
}

console.log(matematicaBasica.somar(5,3));
console.log(matematicaBasica.subtrair(5,3));
console.log(matematicaAvancada.exponenciar(5,3));