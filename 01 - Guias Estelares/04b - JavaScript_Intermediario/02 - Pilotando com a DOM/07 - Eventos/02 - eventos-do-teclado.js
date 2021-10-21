/*
    * alguns exemplos:
    - onkeydown: executa uma ação quando clica nas teclas
    - onkeyup: executa uma ação após soltar as teclas
    - onkeypress: executa uma ação ao pressionar as teclas
*/
const input = document.querySelector('input')

input.onkeydown = function (event) {
    let key = event.key;//chave/nome/valor da tecla clicada
    let code = event.keyCode;//código da tecla clicada

    console.log(key)
    // console.log(code)
}

// input.onkeyup = function() {
//     console.log('Soltou')
// }

// input.onkeypress = function () {
//     console.log('Pressionando')
// }