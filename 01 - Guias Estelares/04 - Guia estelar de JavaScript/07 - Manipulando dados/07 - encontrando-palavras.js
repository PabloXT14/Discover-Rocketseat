/* Manipulando Strings */

// Verfique se o texto contém a palavra Amor
/* 
    - includes()
        - verifica se uma string contém determinado caracter
        - retorna true or false
        - é case-sensitive
*/

// let phrase = "Eu quero viver!"
// let phrase = "Eu quero viver o amor!"
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// Exemplo com number
let number = 1234567
// number = 123567
// number = 12.45
console.log(String(number).includes('4') )