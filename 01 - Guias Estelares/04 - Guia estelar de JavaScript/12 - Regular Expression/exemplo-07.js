/*
    # Telefone - Passo 7
    E se o hífen for opcional? É muito comum que se escreva sem hífen! Podemos utilizar um quantificador para torná-lo opcional.

    # Quantificadores - Parte 2
    Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres.
    ?   - Zero ou um
    *   - Zero ou mais
    +   - Um ou mais

*/

// const regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/ // => só aceita com hífen
const regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/ // => aceita com ou em hífen

const telefone1 = "(21) 1234-5678"
const telefone2 = "(21) 12345678"

console.log(regExp.test(telefone1))
console.log(regExp.test(telefone2))

