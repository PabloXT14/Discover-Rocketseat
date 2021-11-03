/* ===== Map JS =====
- Definição/Uso:
    * O método map() cria um novo array com os resultados da chamada de uma função para cada elemento do array original.
    * O método map() chama uma função fornecida uma vez para cada elemento de um array, em ordem.
    * O map() não executa sua função/teste em arrays sem elementos
    * O map() não muda o array original
    * map() != filter() : o método filter() apenas faz uma filtragem dos elementos originais de um array, retornando somente elementos no mesmo formato do array de origem. Já o map() retornar elementos com outra estrutura de organização em um novo array, se você quiser até mesmo com mais campos.
- Sintaxe:
array.map(function(currentValue, index, arr), thisValue)
    * currentValue(obrigatório): o valor do elementos atual
    * index(opci0nal): o index do elemento atual do array
    * arr(opcional): objeto/copia do array ao qual o elemento atual pertence

- Exemplo:
    const persons = [
        {firstname : "Malcom", lastname: "Reynolds"},
        {firstname : "Kaylee", lastname: "Frye"},
        {firstname : "Jayne", lastname: "Cobb"}
    ];

    persons.map(getFullName);

    function getFullName(item) {
        return [item.firstname,item.lastname].join(" ");
    }
*/
function createPerson(name, age) {
    return { name, age }
}

let people = [
    createPerson("Paloma", 21),
    createPerson("Joana", 17),
    createPerson("Felipe", 19),
    createPerson("Fabio", 17)
]


//1ª demonstração/uso de map()
let adultPeople = people.map(checkAge)
//console.log(adultPeople)

function checkAge(currentPerson) {
    return {
        nome: currentPerson.name,
        idade: currentPerson.age,
        isAdult: currentPerson.age >= 18
    }
}


//2ª demonstração/uso de map()
const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

//console.log(persons.map(getFullName));

function getFullName(item) {
    return [item.firstname, item.lastname].join(" ");
}


//3ª demonstração
let products = [
    {
        nome: 'Mac Book',
        preco: 2000
    },
    {
        nome: 'Notebook',
        preco: 1800
    },
    {
        nome: 'Smartphone',
        preco: 1600
    }
]

console.log(products)
console.log(products.map(desconto))

function desconto(product) {
    let percentageDiscount = 0.2;/*20%*/
    return (
        {
            nome: product.nome,
            preco: product.preco - (product.preco * percentageDiscount)
        }
    );
}
