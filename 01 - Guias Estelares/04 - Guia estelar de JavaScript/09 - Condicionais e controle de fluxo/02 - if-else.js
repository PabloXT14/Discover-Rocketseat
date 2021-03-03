/* if...else */

let temperature = 36.9
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

// Ex. 1
// if(temperature >= 37) {
//     console.log('Febre')
// } else {
//     console.log('Saudável')
// }

// Ex. 2
// if(temperature >= 37.5) {
//     console.log('Frebe alta')
// } else if(temperature < 37.5 && temperature >= 37) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }



// Ex. 3 (boas práticas)

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}