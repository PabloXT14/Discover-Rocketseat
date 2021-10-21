/* 
    * Alterando estilos com style 
    - basta acessar a propriedade .style de um elemento e pegar/alterar/adicionar alguma estilização possivel do css aquele elemento
*/

const element = document.querySelector('body')
const title = document.querySelector('h1')


element.style.backgroundColor = "#FF1155"
console.log(element.style.backgroundColor)


title.style.color = '#FFF';
title.style.cursor = 'pointer';