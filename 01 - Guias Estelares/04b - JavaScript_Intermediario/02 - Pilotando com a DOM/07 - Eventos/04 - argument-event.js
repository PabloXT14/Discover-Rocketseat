/*
    * Argumento event
    - acesse/retorna propriedade presentes em um determinado evento executado
*/

const input = document.querySelector('input')

input.onkeydown = function(event) {
    console.log(event)
    // console.log(event.key)// retorna o valor da tecla clicada
    console.log(event.currentTarget.value)// target é o input, assim podemos acessar as propriedades do input
}