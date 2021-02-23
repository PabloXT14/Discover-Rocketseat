/* Function Hoisting (Elevção de Função)*/


/* == Exemplo de Function Hoisting == */
sayMyName()

function sayMyName() {
    console.log('Pablo !!!!!');
}

/* == Quando não funciona == */
// sayMyName()

// const sayMyName = function() {
//     console.log('Pablo !!!!!');
// }
// mesmo usando var
// sayMyName()

// var sayMyName = function() {
//     console.log('Pablo !!!!!');
// }