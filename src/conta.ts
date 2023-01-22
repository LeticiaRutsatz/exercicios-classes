/*3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo. */

export class ContaCorrente{
    numeroConta: number;
    nomePessoa: string;
    saldo: number;

    constructor(nome: string , numeroConta: number, saldo : number){
        this.numeroConta = numeroConta;
        this.nomePessoa = nome;
        this.saldo = saldo;
    }

    AlteraNome(novoNome: string){
        this.nomePessoa = novoNome;
        return console.log(this.nomePessoa);
    }

    Deposito(valor: number){
        if(valor <= 0){
            return ('Deposite um valor maior que 0')
        }

        this.saldo += valor;
        return console.log(this.saldo);
    }

    Saque(valor: number){
        if(valor > this.saldo){
            return ('Você não pode sacar mais do que possui em sua conta')
        }

        this.saldo -= valor;
        return console.log(this.saldo);
    }
}