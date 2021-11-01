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
*/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(person.fullName());