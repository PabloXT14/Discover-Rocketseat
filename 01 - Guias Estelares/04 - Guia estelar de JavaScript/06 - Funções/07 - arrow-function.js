/* Arrow Function (Função Flexa)*/
// ATENÇÃO: arrow function não sofre hoisting (tem que chama-lá depois de sua criação)


// sem arrow function
// const sayMyName = function() {
//     console.log('Pablo !!!!');
// }

//sayMyName('Pablo'); -> não sofre hoisting

// com arrow function
const sayMyName = (name) => {
    console.log(name);
}

sayMyName('Pablo');
