/* ===== Spread Operator (Sintaxe de Espalhamento) =====
- Definição:
    * Sintaxe de Espalhamento (Spread syntax) permite que um objeto iterável, como uma expressão de <array> ou uma <string> seja expandido para ser usado onde zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que um <objeto> seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados.
- Sintaxe:
    * Para chamada de funções:
        myFunction(...iterableObj);
    * Para arrays literais ou strings
        [...iterableObj, '4', 'five', 6];
    * Para obejtos literais (novo em ECMAScript 2018; stage 3 draft)
        let objClone = { ...obj };
- RESUMINDO:
    * Como já vimos o "spread operator" <...> basicamento permite que criemos uma copia de uma <string>, <array> ou <objeto> e passemos como argumento/item/valor de outro elemento. 
*/

//Espalhamento em arrays literais
let notas_turma1 = [10, 8, 4, 3]
let notas_turma2 = [4, 5, 4, 6]
let todas_notas = [...notas_turma1, ...notas_turma2, 12, 13 ]

//console.log(todas_notas)


//Espalhamento em objetos literais
let person = {
    name: 'José da Silva',
    age: 32,
}

let contact = {
    phone: 19971540560,
    email: "jose@gmail.com",
}

let user1 = {...person, cidade: "Rio Claro", estado: "SP", ...contact}
user1.age = 88;

console.log(person)
console.log(user1)


// Espalhamento e chamadas de funções
function myFunction(x, y, z) {return (`${x}, ${y}, ${z}`)}
let args = [0, 1, 2];
console.log(myFunction(...args));

function myFunction2(v, w, x, y, z) { return `${v}, ${w}, ${x}, ${y}, ${z}`}
let args2 = [0, 1];
console.log(myFunction2(-1, ...args2, 2, ...[3]));