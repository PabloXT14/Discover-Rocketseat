/* # CRIANDO OBJETOS COM CLASS
- No React vamos utlizar uma própriedade JavaScript que é a criação de Objetos através de classes, pois dessa forma poderemos importar/exportar funcionalidades de uma Classe para outra
*/

/* ==== Importando Classes ==== */
const Person = require("./Person");
const Alumn = require("./Aluno");


/* ==== Classe foi colocada em outro script ==== */
// class Person {
//     //Método construtor, ele é chamado toda vez que criamos uma instância da classe em questão
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     //Método da classe
//     greetings() {
//         console.log(`Olá tudo bem! Eu me chamo ${this.name}, e tenho ${this.age}`)
//     }
// }


/* ==== Classe foi colocada em outro script ==== */
// class Alumn extends Person {
//     constructor(name, age, turma) {
//         //super se refere a classe que Alumn está extendendo
//         super(name, age)
//         this.turma = turma;
//     }

//     //Sobrescrevendo o método extendendido
//     greetings() {
//         console.log(`Olá tudo bem! Eu me chamo ${this.name}, e sou da turma ${this.turma}`)
//     }
// }


//Criando instância das classes
let pessoa = new Person("Paulo", 40);
pessoa.greetings();

let aluno = new Alumn("João", 17, 2);
aluno.greetings()
