/* ===== Atribuição via Desestruturação =====
- Definição:
    * A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript que possibilita extrair dados de arrays ou objetos em variáveis distintas
    * As expressões de <objeto> e <matriz> literais fornecem uma maneira fácil de criar pacotes ad hoc de dados:
        var x = [1, 2, 3, 4, 5];
    * A atribuição via desestruturação usa sintaxe similar, mas no lado esquerdo da atribuição são definidos quais elementos devem ser extraídos da variável de origem.
        var x = [1, 2, 3, 4, 5];
        var [y, z] = x;
        console.log(y); // 1
        console.log(z); // 2
- Desestruturação de array (exemplo/demonstração):
    * Atribuição básica de variável:
    var foo = [1, 2, 3];

    var [one, two, three] = foo
    console.log(one); // 1
    console.log(two); // 2
    console.log(three); // 3

    * OBS: no caso dos arrays você pode colocar o nome que quiser nas variáveis que vão receber os valores respectivos do array original

    * Atribuindo o resto de um array para uma variável:
    var [a, ...b] = [1, 2, 3];
    console.log(a); // 1
    console.log(b); // [2, 3] 

- Desestruturação de objeto (exemplo/demonstração):
    * ATENÇÃO: em objetos o nome das variáveis de atribuição devem ter obrigatóriamente o nome do campo cujo ela vai receber o valor (se for apenas um campo).

    * Atribuição básica:
        var person = {name: 'João', age: 42 }
        var { name, age } = person;

        console.log(name); // 'João'
        console.log(age); // 42

    * Atribuição para variáveis com novos nomes (Uma variável pode ser extraída de um objeto e atribuída a uma variável com um nome diferente da propriedade do objeto)
        var o = {p: 42, q: true }
        var {p: foo, q: bar } = o;

        console.log(foo); // 42
        console.log(bar); // true
    
    * Atribuindo o resto de um objeto para uma variável:
        var person = {
            name: 'João',
            age: 42,
            phone: 123456789 
        } 

        var { name, ...resto } = person;

        console.log(name); // 'João'
        console.log(resto); // {age: 42, phone: 123456789 }

- Mais funcionalidades de desestruturação em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
*/

//Destruturação de objeto
let aluno = {
    id: 1234,
    name: 'Jorge',
    phone: 987654321,
    town: 'Rio Claro'
}

//const { id, name, ...rest } = aluno;
// console.log(id)
// console.log(name)
// console.log(rest)

const { id: registro , name: nome, ...rest} = aluno;
console.log(registro)
console.log(nome)
console.log(rest)



//Desestruturação de array
let aluno1 = {
    id: 1235,
    name: 'Pedro',
    phone: 123456789,
    town: 'Piracicaba'
}

let aluno2 = {
    id: 1236,
    name: 'João',
    phone: 123456789,
    town: 'Piracicaba'
}

let aluno3 = {
    id: 1237,
    name: 'Maria',
    phone: 123456789,
    town: 'Piracicaba'
}

let alunos = [aluno1, aluno2, aluno3]

// const [ pedro, joao, maria ] = alunos
// console.log(pedro)
// console.log(joao)
// console.log(maria)

// const [ pedro, ...others ] = alunos
// console.log(pedro)
// console.log(others)