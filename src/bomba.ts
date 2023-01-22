export class BombaCombustivel {
    tipoGasolina!: string;
    private valorLitro!: number;
    quantidadeBomba!: number;

    constructor(tipo : string, valor : number, quantidade : number){
        this.tipoGasolina = tipo;
        this.valorLitro = valor;
        this.quantidadeBomba = quantidade;
    }

    AbastecerPorValor(valor: number) {
        const totalAbastecido = valor / this.valorLitro;

        if(totalAbastecido > this.quantidadeBomba){
            console.log(`Não possui gasolina suficiente, a bomba possui ${this.quantidadeBomba}} litros`)
            return
        }

        console.log(`Abastecido com sucesso!, você abasteceu ${totalAbastecido} litros`)
        this.quantidadeBomba -= totalAbastecido
    }

    AbastecerPorLitro(litro: number) {

        if(litro > this.quantidadeBomba){
            console.log(`Não possui gasolina suficiente, a bomba possui ${this.quantidadeBomba}} litros`)
            return
        }

        const valorTotal = litro *  this.valorLitro
        console.log(`A quantidade a ser paga é de ${valorTotal}`)
        this.quantidadeBomba -= litro
    }

    alterarValor(valor: number) {
        if(valor < 0){
            console.log("O valor informado deve ser maior que 0");
            return
        }

        this.valorLitro = valor
        console.log(`Valor do litro alterado para ${this.valorLitro}`)
    }

    alterarCombustivel(tipo: string) {
        this.tipoGasolina = tipo
        console.log(`O tipo da gasolina foi alterada para ${this.tipoGasolina}`)
    }

    alterarQuantidadeCombustivel(quantidade: number) {
        if(quantidade < 0){
            console.log("O valor informado deve ser maior que 0");
            return
        }

        this.quantidadeBomba = quantidade
        console.log(`A quantidade foi alterado para ${this.quantidadeBomba}`)
    }
}