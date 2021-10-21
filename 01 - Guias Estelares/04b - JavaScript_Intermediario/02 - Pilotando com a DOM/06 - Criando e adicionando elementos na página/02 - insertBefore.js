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


/* outros ex/teste */
const menu = document.querySelector('ul')
const child1 = menu.firstElementChild;
const child3 = menu.lastElementChild;

const newChild2 = document.createElement('li')
newChild2.innerHTML = `Filho 2`

menu.insertBefore(newChild2, child3);
//menu.insertBefore(newChild2, child1.nextElementSibling)// simulando um insertAfter(este não existe)