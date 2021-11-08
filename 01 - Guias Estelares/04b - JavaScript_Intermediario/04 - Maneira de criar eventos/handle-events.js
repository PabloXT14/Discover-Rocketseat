/* ===== Maneira de criar eventos ===== */
const btn = document.querySelector('button');


/* === Através do HTML === */
// <button onclick="colorRed(this)">Click Me!</button>
/*
    * ATENÇÃO: quando a function é executada dentro do onclick do HTML, quando chamamos o "this" diretamente dentro dessa função ele irá se referir ao elemento "window", <this = window>, por isso importamos this como parâmetro da função (pois assim se refere ao elemento clicado)
*/

/* === Através do AddEventListener === */
// btn.addEventListener('click', colorGreen);

//other way (with bind)
// btn.addEventListener('click', event => {
//     let newColorGreen = colorGreen.bind(event.target);
//     newColorGreen();
// });


/* === Através do acesso direto ao elemento === */
btn.onclick = function (event) {
    colorAlternation(event.currentTarget);
}



/* Funções de Teste (para os eventos) */
function colorRed(elem) {
    elem.style.backgroundColor = '#ff5a6a';
}

function colorGreen() {
    /* como executamos essa função dentro de um addEventListener, o this vai se referir ao nosso elemento clicado*/
    this.style.backgroundColor = '#5aff6a';
}

function colorAlternation(elem) {

    //Pegando valor do background do button
    let bgStyle = window.getComputedStyle(elem).getPropertyValue('background-color')

    //Change to Blue
    if (bgStyle === 'rgb(130, 84, 231)') {
        elem.style.backgroundColor = '#5a6aff';
        return;
    }

    //Change to Red
    if (bgStyle === 'rgb(90, 106, 255)') {
        elem.style.backgroundColor = '#ff5a6a';
        return;
    }

    //Change to Purple
    if (bgStyle === 'rgb(255, 90, 106)') {
        elem.style.backgroundColor = '#8254e7';
        return;
    }
}


