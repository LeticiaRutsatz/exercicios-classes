/*2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor */

export class Bola {
    cor: string;
    circunfer: number;
    material: string; 

    constructor(cor: string, circunferencia: number, material: string){
        this.cor = cor;
        this.circunfer = circunferencia;
        this.material = material;
    }

    TrocaCor(novaCor: string){
        return this.cor = novaCor
    }

    MostraCor(){
        return console.log(this.cor)
    }
}