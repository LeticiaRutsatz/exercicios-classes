"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaCorrente = void 0;
class ContaCorrente {
    constructor(nome, numeroConta, saldo) {
        this.numeroConta = numeroConta;
        this.nomePessoa = nome;
        this.saldo = saldo;
    }
    AlteraNome(novoNome) {
        this.nomePessoa = novoNome;
        return console.log(this.nomePessoa);
    }
    Deposito(valor) {
        if (valor <= 0) {
            return ('Deposite um valor maior que 0');
        }
        this.saldo += valor;
        return console.log(this.saldo);
    }
    Saque(valor) {
        if (valor > this.saldo) {
            return ('Você não pode sacar mais do que possui em sua conta');
        }
        this.saldo -= valor;
        return console.log(this.saldo);
    }
}
exports.ContaCorrente = ContaCorrente;
