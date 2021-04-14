// Chamando Módulos Nativos
// ex: const path = require('path')


// Chamando Meus Módulos (Módulos Criados)
/*
    - No arquivo/módulo que você vai chamar e preciso ter o comando 'module.exports' + o que será exportado do arquivo
    - Então só é preciso passar a localização desse arquivo dentro do require()
*/
const myModule = require('./exports')
console.log(myModule)
// console.log(myModule.age)