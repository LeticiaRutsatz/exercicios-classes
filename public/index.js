"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carro_1 = require("./carro");
/*const contador1 = new Contador(8)
console.log(contador1)
contador1.Icrementar(5);
console.log(contador1)*/
/*const bola1 = new Bola('Vermelha', 8, 'Madeira');
console.log(bola1)
bola1.TrocaCor('Azul');
bola1.MostraCor();*/
/*const conta1 = new ContaCorrente('Leticia', 2584, 1200);
conta1.AlteraNome('Luana');
conta1.Deposito(600);
conta1.Saque(100);*/
/*const calculadora1 = new Calculadora;
console.log(calculadora1.Somar(25, 85));
console.log(calculadora1.Divide(25, 5));
console.log(calculadora1.Multiplica(25, 74));
console.log(calculadora1.Diminuir(25, 85));
calculadora1.Vizualiza()*/
/*const bomba1 = new BombaCombustivel("Comum", 6, 100);
bomba1.AbastecerPorLitro(12);
bomba1.AbastecerPorValor(50);
bomba1.alterarCombustivel('Aditivado');
bomba1.alterarQuantidadeCombustivel(120);
bomba1.alterarValor(4);*/
const carro1 = new carro_1.Carro(6);
carro1.AdicionarGasolina(50);
carro1.Andar(230);
