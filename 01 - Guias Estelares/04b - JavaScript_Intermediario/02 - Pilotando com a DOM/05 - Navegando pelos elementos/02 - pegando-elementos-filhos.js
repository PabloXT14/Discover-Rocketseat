/*
    * Navegando pelos Elementos
*/

const elem = document.querySelector('body')

/*
    - childNodes: retorna uma lista no formato 'NodeList' de todos os elementos filhos de um determinado elemento, considerando também os espaços de texto vazios na estrutura HTML
    - children: retorna uma lista no formato 'HTMLCollection' de todos os elementos filhos de um determinado elemento, desconsiderando os espaços vazios.
*/
console.log(elem.childNodes)
console.log(elem.children)

/*
    - firstChild: semelhante ao 'childNode' (considera os espaços em brancos no HTML), no entanto, só retorna o 1º elemento filho
    - firstElementChild: semelhante ao 'children'( não considera os espaços em brancos no HTML), no entanto, só retorna o 1º elemento filho

*/

console.log(elem.firstChild)
console.log(elem.firstElementChild)

/*
    - lastChild: semelhante ao 'childNode', no entanto, só retorna o ultimo elemento filho
    - lastElementChild: semelhante ao 'children', no entanto, só retorna o último elemento filho

*/
console.log(elem.lastChild)
console.log(elem.lastElementChild)
