/*
    * innerText
    - serve para alterar o texto interno de um elemento HTML, semelhante ao textContent

*/

const element = document.querySelector('h1')
element.innerText = 'Salve Galerinha'

console.log(element.innerText)