/* Manipulando Strings e Arrays */

/*
    Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
    
    * split("caracter de separação") => transfro uma string em array.
    * join("caracter de separação") => transfroma um array em string.
*/

let phrase = "Eu vou ser um programador top!"
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore);