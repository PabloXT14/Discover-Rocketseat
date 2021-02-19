/* ===== VARIÁVEIS E TIPOS DE DADOS ===== */

// declaração or declaration
var name

// assignment or atribuição de valor
name = "Fábio"

// que tipo de dado foi colocado na variável
console.log(name);

/* ===== AGRUPAMENTO DE DECLARAÇÕES ===== */

let age, isHuman

age = 23
isHuman = true

console.log(name, age, isHuman)

/* ===== CONCATENANDO E INTERPOLANDO VARIÁVEIS ===== */

// Concatenando os valores
console.log('o ' + name + ' tem ' + age + ' anos. ')

// Interpolando valores com template literals or template strings
console.log(`o ${name} tem ${age} anos.`);


/* ===== OBJECTS ===== */

const person = {
    name: 'Maria',
    age: 29,
    weight: 50,
    isAdmin: true
}

console.log(`O(a) ${person.name} tem ${person.age} anos.`)


/* ===== ARRAY ===== */

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 29
    }
]

console.log(` O ${animals[2].name} tem ${animals[2].age} anos. `);