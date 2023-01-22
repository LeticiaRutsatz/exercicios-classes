"use strict";
/*2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bola = void 0;
class Bola {
    constructor(cor, circunferencia, material) {
        this.cor = cor;
        this.circunfer = circunferencia;
        this.material = material;
    }
    TrocaCor(novaCor) {
        return this.cor = novaCor;
    }
    MostraCor() {
        return console.log(this.cor);
    }
}
exports.Bola = Bola;
