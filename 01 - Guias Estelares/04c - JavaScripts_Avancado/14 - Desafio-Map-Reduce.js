/*
    - Cria (através de seus conhecimentos) algum algoritimo que realize a mesma função do map() e do reduce() sem utilizar nenhuma dessas hight functions
*/


let persons = [
    {firstname: 'João', lastname:'Alencar', age: 16},
    {firstname: 'Maria', lastname:'Diaz', age: 25},
    {firstname: 'Pedro', lastname:'Peralta', age: 17},
    {firstname: 'Brenda', lastname:'Santiago', age: 21}
]

//Reproduzindo Map()
function createMap(array) {
    let newArray = []

    for(let elem of array) {
        //getFullName and checkAge
        newArray.push({
            fullname: [elem.firstname, elem.lastname].join(" "),
            age: elem.age,
            isAdult: elem.age >= 18
        })
    }

    return newArray;
}

//Reproduzindo Reduce()
function createReduce(array, initialValue = 0) {
    let acumulador = initialValue;
    for(let elem of array) {
        //totalAge
        acumulador += elem.age;
    }
    return acumulador;
}


console.log(createMap(persons))
console.log(createReduce(persons, 10))//2ºparametro: coloque o valor que quiser
