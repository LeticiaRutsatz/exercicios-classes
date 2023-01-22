/*6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.*/

export class Carro {
    consumoCombustivel: number;
    quantityCombustivel: number;

    constructor(consumoCombustivel: number){
        this.consumoCombustivel = consumoCombustivel;
        this.quantityCombustivel = 0;
    }

    AdicionarGasolina(litros : number){
        return console.log(this.quantityCombustivel += litros)
    }

    Andar(km : number){
        if(this.quantityCombustivel <= 0){
            return console.log('Adicione gasolina para andar!')
        }

        const combustivelGasto = this.consumoCombustivel * km

        if(combustivelGasto > this.quantityCombustivel){
            return console.log('Adicione mais gasolina para andar esta quantidade')
        }

        const combustivelAtual = this.quantityCombustivel - combustivelGasto
        return console.log(combustivelAtual)
    }
}