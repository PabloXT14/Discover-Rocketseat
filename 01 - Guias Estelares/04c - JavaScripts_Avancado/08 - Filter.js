/* ===== Filter JS =====
- Definição/Uso:
    * O método filter() cria um novo array preenchido com todos os elementos de um outro array que passaram em um teste (providenciado por uma função callback)
    * O filter() não executa sua função/teste em arrays sem elementos
    * O filter() não muda o array original
    * O filter() pode ser chamado em qualquer array (que tenha elementos)
- Sintaxe/Exemplo:
    const ages = [32, 33, 16, 40];

    ages.filter(checkAdult)    // Returns [32, 33, 40]

    function checkAdult(age) {
        return age >= 18;
    }
*/

function newAlumn(name, age) {
    return { name, age }
}

let alumns = [
    newAlumn("Paulo", 21),
    newAlumn("João", 18),
    newAlumn("Maria", 33),
    newAlumn("Marcia", 18)
]


// 1ª demonstração/uso
console.log(alumns.filter(checkAge))

function checkAge(people) {
    return people.age > 18;
}

//2ª demonstração/uso
// console.log(
//     alumns.filter((alumn)=> {//alumn: cada um dos elementos do array
//         return alumn.age <= 18
//     })
// )


//3ª demonstração sem o filter
// let alumnsMaiorde18 = []
// for(let al of alumns) {
//     if(al.age > 18) {
//         alumnsMaiorde18.push(al)
//     }
// }
// console.log(alumnsMaiorde18)
