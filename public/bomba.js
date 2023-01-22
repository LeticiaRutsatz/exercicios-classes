"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BombaCombustivel = void 0;
class BombaCombustivel {
    constructor(tipo, valor, quantidade) {
        this.tipoGasolina = tipo;
        this.valorLitro = valor;
        this.quantidadeBomba = quantidade;
    }
    AbastecerPorValor(valor) {
        const totalAbastecido = valor / this.valorLitro;
        if (totalAbastecido > this.quantidadeBomba) {
            console.log(`Não possui gasolina suficiente, a bomba possui ${this.quantidadeBomba}} litros`);
            return;
        }
        console.log(`Abastecido com sucesso!, você abasteceu ${totalAbastecido} litros`);
        this.quantidadeBomba -= totalAbastecido;
    }
    AbastecerPorLitro(litro) {
        if (litro > this.quantidadeBomba) {
            console.log(`Não possui gasolina suficiente, a bomba possui ${this.quantidadeBomba}} litros`);
            return;
        }
        const valorTotal = litro * this.valorLitro;
        console.log(`A quantidade a ser paga é de ${valorTotal}`);
        this.quantidadeBomba -= litro;
    }
    alterarValor(valor) {
        if (valor < 0) {
            console.log("O valor informado deve ser maior que 0");
            return;
        }
        this.valorLitro = valor;
        console.log(`Valor do litro alterado para ${this.valorLitro}`);
    }
    alterarCombustivel(tipo) {
        this.tipoGasolina = tipo;
        console.log(`O tipo da gasolina foi alterada para ${this.tipoGasolina}`);
    }
    alterarQuantidadeCombustivel(quantidade) {
        if (quantidade < 0) {
            console.log("O valor informado deve ser maior que 0");
            return;
        }
        this.quantidadeBomba = quantidade;
        console.log(`A quantidade foi alterado para ${this.quantidadeBomba}`);
    }
}
exports.BombaCombustivel = BombaCombustivel;
