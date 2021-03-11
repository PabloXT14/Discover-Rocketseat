/*
    * alguns exemplos:
    - onkeydown: executa uma ação quando clica nas teclas
    - onkeyup: executa uma ação após soltar as teclas
    - onkeypress: executa uma ação ao pressionar as teclas
*/
const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('Clicou')
}

// input.onkeyup = function() {
//     console.log('Soltou')
// }

// input.onkeypress = function() {
//     console.log('Pressionando')
// }