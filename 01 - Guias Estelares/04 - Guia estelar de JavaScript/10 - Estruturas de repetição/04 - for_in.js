/*
    Estrutura de repetição 'for..in'
    - utilizado para criar um loop para acessar todas propriedades de um objeto.
    - semelhante ao for...of


*/

let person = {
    name: 'Jack',
    age: 30,
    weight: 88.9
}

// pode ser qlq nome no lugar do property
for(let property in person) {
    // console.log(property)// acessando propriedade
    console.log(person[property])// acessando valor dentro da propriedade
}
