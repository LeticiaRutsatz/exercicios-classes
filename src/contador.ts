/*1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador. */


export class Contador {
    valor: number;

    constructor(valorInicial: number){
        this.valor = valorInicial;
    }

    Zerar(){
        return this.valor = 0;
    }

    Icrementar(valorIcremento: number){
        return this.valor += valorIcremento;
    }

    Retorna(){
        return this.valor
    }
}