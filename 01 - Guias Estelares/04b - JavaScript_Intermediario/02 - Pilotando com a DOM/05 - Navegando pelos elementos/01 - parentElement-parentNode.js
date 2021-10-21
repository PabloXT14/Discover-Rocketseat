/* 
    * Navegando pelos Elementos
    - parentNode ou parentElement: ambos selecionam o elemento pai de um determinado elemento
    * Note: o parentElement é mais usado
*/

const element = document.querySelector('h1')


console.log(element.parentElement)//header
console.log((element.parentNode).parentElement)//body

const bodyPage = element.parentElement.parentElement;
bodyPage.style.backgroundColor = '#23f1f6';
