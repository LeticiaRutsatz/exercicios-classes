"use strict";
/*1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contador = void 0;
class Contador {
    constructor(valorInicial) {
        this.valor = valorInicial;
    }
    Zerar() {
        return this.valor = 0;
    }
    Icrementar(valorIcremento) {
        return this.valor += valorIcremento;
    }
    Retorna() {
        return this.valor;
    }
}
exports.Contador = Contador;
