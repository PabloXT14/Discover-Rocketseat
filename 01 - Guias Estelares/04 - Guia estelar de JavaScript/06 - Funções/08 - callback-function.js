/* == Callback Function == */
/* Uma "callback function" (função de retorno de chamada) é uma função que é passada como um argumento para outra função, para ser “chamada de volta” posteriormente. Uma função que aceita outras funções como argumentos é chamada de "higher-order function"(função de ordem superior), que contém a lógica para quando a função de retorno de chamada é executada
*/

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()
    /*name = 
        function() {
            console.log('estou em uma callback');
        }
    */

    console.log('depois de executar a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback');
    }
)