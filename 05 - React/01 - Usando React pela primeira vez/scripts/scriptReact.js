const domContainer = document.querySelector("#root");

/* 
React.createElement(par1,par2,par3): cria um elemento atravé do React, os parâmetros representam: 
    - par1: tag do elemento (ex: h1, div, p, ...)
    - par2: parâmetros da tag (ex: id, class, type, ...)
    - par3: conteúdo ou filhos.
*/
const element = React.createElement("h1", {id:"Título principal"}, "Hellow World");

const subTitulo = React.createElement("h2", {id:"subtitulo"}, "I'm everybody!");

const headline = React.createElement("div", null, element, subTitulo);


/* 
ReactDom.render(elem, local): serve para mostram na tela/DOM(ducument object model = HTML) algum elemento que tenhamos criado no React, seus parâmetros indicam:
    - elem: elemento(s) criado com React
    - local: local onde o elemento irá aparecer
*/
ReactDOM.render(headline, domContainer);