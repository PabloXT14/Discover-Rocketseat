//Importando Classe Person
const Person = require("./Person");


class Alumn extends Person {
    constructor(name, age, turma) {
        //super se refere a classe que Alumn está extendendo
        super(name, age)
        this.turma = turma;
    }

    //Sobrescrevendo o método extendendido
    greetings() {
        console.log(`Olá tudo bem! Eu me chamo ${this.name}, e sou da turma ${this.turma}`)
    }
}

//Exportando Classe
module.exports = Alumn;