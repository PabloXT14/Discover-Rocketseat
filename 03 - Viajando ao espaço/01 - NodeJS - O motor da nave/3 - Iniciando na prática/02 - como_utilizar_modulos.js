/*
    * require()
        - comando/função utilizada para chamar módulos('arquivos') nativos, instalados(pelo npm) ou criados no NodeJS  
        - não se esqueça de passar um argumento no require, pois se não ocorrerá um erro
        - ex: require('path') => (módulo nativo do NodeJS)
        
*/

const path = require('path')

// path.basename() => retorna o nome base da localização de um determinado arquivo
console.log(path.basename(__filename))
console.log(path.basename("/Users/starter/docs.js"))


// path.extname() => retorna a extensão/tipo de um arquivo
console.log(path.extname(__filename))