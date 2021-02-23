/* ==== Retornando valores dentro da função ==== */
// se uma função não tiver 'return' dentro, ela só vai executar os códigos dentro de sí, mas não retornará nenhum valor

let total = 0;// diferente do total de multiple

const multiple = function(number1, number2) {
    // console.log(number1*number2);
    let total = number1 * number2
    return total;
}


let number1 = 2
let number2 = 3
// multiple(number1, number2);
console.log(` ${number1} X ${number2} = ${multiple(number1, number2)}`);
console.log(total);


