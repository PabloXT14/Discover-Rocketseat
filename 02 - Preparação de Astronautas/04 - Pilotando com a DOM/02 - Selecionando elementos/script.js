/* getElementById() */ 
// document.getElementById('nome-do-id')
// const element = document.getElementById('blog-title')
// console.log(element)


/* getElementsByClassName() */
// document.getElementsByClassName('nome-da-classe') => seleciona todos os objetos que possuem tal classe
// const element = document.getElementsByClassName('paragraph')
// console.log(element)


/* getElementsByTagName() */
// document.getElementsByTagName('nome-da-tag') => seleciona todos os objetos que possuem tal tag
// const element = document.getElementsByTagName('meta')
// console.log(element)


/* querySelector() */
// busca por seletor, semelhante ao css, é um dos tipos mais versáteis, no entanto, seleciona só o primeiro elemento HTML que encontrar na busca
// const element = document.querySelector('meta')
// const element = document.querySelector('.paragraph')
// const element = document.querySelector('#blog-title')
// const element = document.querySelector('[src]')
// console.log(element)


/* querySelectorAll() */
// busca por seletor, semelhante ao css, é um dos tipos mais versáteis, e diferente do querySelector(), este retorna uma lista de todos os elementos HTML que possuem determinado seletor
// const elements = document.querySelectorAll('meta')
// console.log(elements)
// Também pode-se utilizar o querySelectorAll diretamente em um forEach, para acessar todos os elementos que possui
// elements.forEach(el => console.log(el))


/* Qual usar ? */

// getElementById (element)
// getElementsByClassName (HTMLCollection)
// getElementsByTagName (HTMLCollection)
// querySelector (element)
// querySelectorAll (Nodelist)

// *Obs: por conta da versatilidade muitos indicam os querySelector/All, no entanto, os querySelectors são um pouquinho mais lentos que os getElement..., algo que nem se nota a olho nú, então você pode escolher os querySelectors devido a versatilidade ou os getElemet... para algo específico. 