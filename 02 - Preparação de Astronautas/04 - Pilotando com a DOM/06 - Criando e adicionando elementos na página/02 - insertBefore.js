// Adicionando Elementos
const div = document.createElement('div')
div.innerText = "Olá Mundo"

/*
    insertBefore: insere filhos em um elemento, antes de um outro determinado 
    filho
    - insertBefore('elemento a ser inserido', 'elemento de base para a posição')
*/
const body = document.querySelector('body')
const script = document.querySelector('body script')
const header = document.querySelector('header')
body.insertBefore(div, script)
// body.insertBefore(div, header.nextElementSibling)// simulando um insertAfter(este não existe)