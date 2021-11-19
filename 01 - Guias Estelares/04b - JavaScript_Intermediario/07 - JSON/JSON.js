/* # JSON

## O QUE É O JSON
- JSON significa "J"ava "S"cript "O"bject "N"otation.
- JSON é um *formato de texto para armazenamento e transporte de dados. 
- JSON é "autodescritivo" e fácil de entender
- Resumo: JSON é uma função/forma de converter um Objeto JavaScript para o formato string, para podermos enviar os dados desse objeto para outro lugar (ex: um banco de dados, servidor). Assim sendo, o JSON torna possível armazenar objetos JavaScript como texto.

## JSON POSSUI DUAS FUNÇÕES:
- JSON.parse(): função incorporada para converter strings JSON em objetos JavaScript (JSON => Obj).
- JSON.stringify(): uma função incorporada para converter um objeto em uma string JSON (Obj => JSON).

*/

const aluno = {
    turma: 1,
    nome: "Paulo",
    nota: 9.2,
}

const alunoJSON = JSON.stringify(aluno)

const aluno2JSON = '{"turma": 1, "nome":"João","nota":5.6}'/*Obs: o JSON tem esse formato especifico de declaração ou escrita*/

const aluno2 = JSON.parse(aluno2JSON)

console.log(aluno)
console.log(alunoJSON)
console.log(aluno2JSON)
console.log(aluno2)


/* Other Exemplo  */

const person = {
    name: 'John Doe',
    age: 21,
    country: 'USA'
}

const JSONperson = JSON.stringify(person)


console.log(`Person em JSON: ${JSONperson}`)
console.log(`Person em Obj: ${person}`)

