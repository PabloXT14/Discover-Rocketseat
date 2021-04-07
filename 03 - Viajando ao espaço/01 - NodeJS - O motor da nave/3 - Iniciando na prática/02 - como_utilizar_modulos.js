/*
    * require()
        - comando/função utilizada para chamar módulos('arquivos') nativos, instalados(pelo npm) ou criados no NodeJS  
        - não se esqueça de passar um argumento no require, pois se não ocorrerá um erro
        - ex: require('path') => (módulo nativo do NodeJS)
*/

const path = require('path')

// path.basename() => retorna o nome base de um determinado arquivo
console.log(path.basename(__filename))
console.log(path.basename("/Users/starter/docs.js"))