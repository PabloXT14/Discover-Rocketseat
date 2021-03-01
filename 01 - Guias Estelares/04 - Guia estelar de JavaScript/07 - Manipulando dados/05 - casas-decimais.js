/* Manipulando String e Numbers */

/* 
    Transformar um número quebrado com 2 casas decimais e trocar o ponto por vígula

    *Obs: ao trocar o ponto por vígula (com replace) ou limitar as casas decimais (com toFixed), o number e convertido em string
    
    - toFixed(nº casa depois da vígula)
    - replace("o que quero trocar", "pelo que quero trocar")
*/

let number = 123.45678910
// String
console.log(number.toFixed(2).replace(".", ","));
// Number
console.log(Number(number.toFixed(2)));