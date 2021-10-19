/*
    * Navegando pelos Elementos
*/

let el = document.querySelector('header')
 
/*
    - nextSibling: seleciona o proximo irmão de um elemento, considerando os espaços vazios/em branco na estrutura HTML
    - nextElementSibling: seleciona o proximo irmão de um elemento, desconsiderando os espaços vazios na estrutura HTML
*/
console.log(el.nextSibling)
console.log(el.nextElementSibling)

/*
    - previousSibling: seleciona o irmão anterior de um elemento, considerando os espaços em branco na estrutura HTML
    - previousElementSibling: seleciona o irmão anterior de um elemento, desconsiderando os espaços em branco da estrutura HTML
*/
console.log(el.previousSibling)
console.log(el.previousElementSibling)