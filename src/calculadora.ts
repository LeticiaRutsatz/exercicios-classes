/*Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico. */

export class Calculadora{
    historico: string[];

    constructor(){
        this.historico = []
    }

    Somar(n1 : number, n2 : number){
       const resultado = n1 + n2
        this.historico.push(`${n1} + ${n2} = ${resultado}`);
        return resultado;
    }

    Diminuir(n1 : number, n2 : number){
        const resultado = n1 - n2
        this.historico.push(`${n1} - ${n2} = ${resultado}`);
        return resultado;
    }

    Divide(n1 : number, n2 : number){
        const resultado = n1 / n2
        this.historico.push(`${n1} / ${n2} = ${resultado}`);
        return resultado;
    }

    Multiplica(n1 : number, n2 : number){
        const resultado = n1 * n2
        this.historico.push(`${n1} * ${n2} = ${resultado}`);
        return resultado;
    }

    Vizualiza(){
        return console.log(this.historico)
    }
}