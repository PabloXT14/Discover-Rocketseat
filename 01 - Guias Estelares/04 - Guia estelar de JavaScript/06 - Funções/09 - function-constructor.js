/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name){
    this.name = name;
    this.walk = function() {
        return this.name + ' está andando'
    }
}

const pablo = new Person('Pablo')
const mayk = new Person('Mayk')
console.log(pablo.walk());
console.log(mayk.walk());


// No JavaScript há diversas functions constructors automáticas

// let name = new String('Domingos')
// console.log(name);

// let date = new Date('2021-02-24')
// console.log(date);


/* +exemplos */

// function Escola(name){
//     this.name = name;
//     this.df = name;
//     this.apresentatio = () =>{
//         return name + ' é top de mais';
//     }
// }

// const bayeux = new Escola('BYX');

// console.log(bayeux.apresentatio());
