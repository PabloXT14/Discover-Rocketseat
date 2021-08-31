class Person {
    //Método construtor, ele é chamado toda vez que criamos uma instância da classe em questão
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //Método da classe
    greetings() {
        console.log(`Olá tudo bem! Eu me chamo ${this.name}, e tenho ${this.age}`)
    }
}

//Exportando Classe
module.exports = Person;