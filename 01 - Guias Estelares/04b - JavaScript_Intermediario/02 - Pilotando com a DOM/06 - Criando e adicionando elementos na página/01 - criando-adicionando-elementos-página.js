/*
    * Criando e Adicionando Elementos na Página
*/

// createElement: cria um determinado elemento HTML
const div = document.createElement('div')
div.innerText = "Olá Devs! 🚀🚀🚀"

/*
    - append: adiciona um filho na ultima posição a um elemento
    - prepend: adiciona um filho na primeira posição a um elemento
*/
const body = document.querySelector('body')

// body.append(div)
body.prepend(div)


/* Outros teste/exemplos */
const ball = document.createElement('div');
ball.style.width = '40px'
ball.style.height = '40px'
ball.style.backgroundColor = '#14f596'
ball.style.borderRadius = '50%'

body.append(ball);