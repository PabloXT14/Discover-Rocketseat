/* 
    * Navegando pelos Elementos
    - parentNode ou parentElement: ambos selecionam o elemento pai de um determinado elemento
*/

const element = document.querySelector('h1')

console.log(element.parentElement)

console.log((element.parentNode).parentElement)