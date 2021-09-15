/*
========== THIS ==========
- A palavra-chave <this> em JavaScript se refere ao objeto ao qual pertence
- Tem valores diferentes dependendo de onde é usado:
    * Em um método, <this> refere-se ao objeto proprietário.
    * Sozinho, <this> refere-se ao objeto global <window>.
    * Em uma função, <this> refere-se ao objeto global .
    * Em uma função, no modo estrito, <this> é undefined.
    * Em um evento, <this> refere-se ao elemento que recebeu o evento.
    * Em métodos como call() e apply() pode-se referir <this> a qualquer objeto .

- Ex:
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


========== BIND ==========
- O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave <this> definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
- Resumindo, o método bind(), que pode ser chamada em qualquer função, basicamente troca o valor/referência do <this> daquela função:
- Ex:
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined => pois x não recebeu um value no escopo global

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42


*/


//Testando <this>
const person = {
    firstName: "Phil",
    lastName: "Dunphy",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName())



//Testando <bind>
const module = {
  x: 17,
  getX: function() { return this.x },
}

let unboundGetX = module.getX;
console.log(unboundGetX());// expected output: undefined => pois x não recebeu um value no escopo global

let boundGetX = unboundGetX.bind(module);
console.log(boundGetX());// expected output: 17

//Desafio: mude o texto de um <h1> através do bind() ao clicar em um <button> 