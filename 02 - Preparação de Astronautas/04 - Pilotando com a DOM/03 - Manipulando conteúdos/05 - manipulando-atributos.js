/*
    * Manipulando atributos:
    - setAttribute: adiciona um determinado atributo a um elemento HTML
    - removeAttribute: remove um determinado atributo de um elemento HTML
    - getAttribute: pegar o valor de um determinado atributo de um elemento HTML
*/

const divContent = document.querySelector('div')
divContent.setAttribute('id','estilo')
console.log(divContent)

const divContentID = document.querySelector('#estilo')
console.log(divContentID.getAttribute('id'))

divContent.removeAttribute('id')
console.log(divContent)
