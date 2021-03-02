/*
    Operadores Unirários (+ exemplos)
        - typeof => mostra o tipo de dado de uma variável
        - delete => deleta alguma propriedade de um objeto (lembrando: praticamente tudo em JS é objeto)
*/

const person = {
    name: 'Jack',
    age: 18,
    heigth: 185,
}

delete person.heigth;

console.log(typeof person.name);
console.log(person.heigth);

