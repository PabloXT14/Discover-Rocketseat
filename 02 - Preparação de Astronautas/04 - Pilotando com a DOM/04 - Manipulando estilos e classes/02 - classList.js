/*
    * classList (outra forma de alterar os estilos)
    - o classList retorna a lista de classes de um elemento HTML, e possue atributos que torna possível alterar os estilos do mesmo elemento, os mais comuns são:
        - classList.add('classe') => adiciona uma classe ao elemento
        - classList.remove('classe') => remove uma classe de um elemento
        - classList.toggle('classe') => se tiver a classe remove, se não há tiver à adiciona.
*/

const element  = document.querySelector('body')

element.classList.add('active', 'green')
// console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')