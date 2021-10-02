/* ===== Valor vs Referência =====
- Em dados primitivos (int, float, string, boolean, ...), quanto criamos uma variável que será copia de outra variável, basta fazer o seguinte:
    let alunoA = 'José'
    let alunoB = alunoA
- Agora caso você deseje alterar o valor de uma variável não irá interferir em nada no valor da outra, pois uma é um "valor novo/copia separada" da outra
    alunoB = 'Maria'
    console.log(alunoA) // return 'José'
    console.log(alunoB) // return 'Maria'

- No entanto, em <array> e <object>, quanto tentamos criar uma variável que será copia de outra variável do tipo <array>/<object>, essa variável nova vira uma referência e não um novo valor:
    let turmaA ["Pedro", "José", "Maria"]
    let turmaB = turmaA;
    turmaB.push("Luiz")

    console.log(turmaA) // return ["Pedro", "José", "Maria", "Luiz"]
    console.log(turmaB) // return ["Pedro", "José", "Maria", "Luiz"]

- Para que isso não ocorra em <array> e/ou <object> precisamos declarar a variável copia de uma forma específica:
    * Para <arrays>:
        let turmaA ["Pedro", "José", "Maria"]
        let turmaB = turmaA.slice() or let turmaB = [...turmaA]
        turmaB.push("Luiz") 

        console.log(turmaA) // return ["Pedro", "José", "Maria"]
        console.log(turmaB) // return ["Pedro", "José", "Maria", "Luiz"]

    * Para <objects>:
        let alunoA = { nome: "Pedro", idade: 18 }
        let alunoB = Object.assign({}, alunoA) or let alunoB = {...alunoA}

        alunoB.idade += 2
        console.log(alunoA.idade) // return 18
        console.log(alunoB.idade) // return 20
-  RESUMINDO:
    * Atribuição por valor: faz uma cópia do elemento original, e qualquer alteração na cópia não vai refletir no original.
    * Atribuição por referência: não faz cópia, é como se desse um novo apelido para o objeto original. Qualquer modificação no novo elemento altera também o original.
*/

//Exemplo valor em dados primitivos
let n1 = 10
let copyn1 = n1;

copyn1 = 12;
console.log(`n1: ${n1}
copyn1: ${copyn1}`)


//Exemplo valor/referência <object>
let alunoA = {nome: "João", idade: 18}
//let alunoB = alunoA // alunoB vira referência do alunoA
//let alunoB = Object.assign({}, alunoA) // alunoB é uma copia de alunoA
let alunoB = {...alunoA} // alunoB é uma copia de alunoA

alunoB.idade = 20;
console.log(`alunoA: ${alunoA.idade}
alunoB: ${alunoB.idade}`)


//Exemplo valor/referência <array>
let turmaA = ["Pedro", "Maria", "João"]
//let turmaB = turmaA // turmaB vira referência de turmaA
// let turmaB = turmaA.slice() // turmaB vira uma copia separada de turmaA
let turmaB = [...turmaA] // turmaB vira uma copia separada de turmaA

turmaB.push('José')
console.log(`turmaA: ${turmaA}
turmaB: ${turmaB}`)