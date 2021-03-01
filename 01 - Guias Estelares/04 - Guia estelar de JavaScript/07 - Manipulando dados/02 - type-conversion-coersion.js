/*
    Type Conversion (typecasting) vs Type Coersion

    * Ambos fazem alteração de um tipo de dado para outro tipo
        - Type conversion: utilizado tanto pelo programador quanto pelo sistema/linguagem própria do JavaScript para converter algum tipo de dado.
        - Type coersion: usado somente pelo sistema interno do JavaScript.  
*/

// Ex. Type Coersion
console.log('9' + 5);// o cinco é convertido pelo sistema do JS, em string

// Ex. Type Conversion
console.log(Number('9') + 5);// agora convertemos a string '9' para number