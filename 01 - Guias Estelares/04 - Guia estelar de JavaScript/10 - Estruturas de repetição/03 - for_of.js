/*
    Estrututa de repetição 'for...of'
    - Utilizado para percorrer toda a cadeia de caracteres de uma variável String, ou todos os itens de um Array

*/

let name = 'Pablo'
let names = ['Phillipe', 'Jason', 'Jack']


// Percorrendo caracteres da String
// * obs: no char pode ser qlq nome que vc queira
// for(let char of name) {
//     console.log(char)
// }

// Percorrendo itens do Array
for(let nome of names) {
    console.log(nome)
}


// Dica para acessar digitos de um number
// let number = 123456

// for(let n of String(number)) {
//     console.log(Number(n));
// }