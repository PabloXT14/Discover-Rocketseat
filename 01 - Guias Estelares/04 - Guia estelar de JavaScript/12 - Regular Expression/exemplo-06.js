/*
    # Telefone - Passo 6
    E se for necessário aceitar números com 8 ou 9 dígitos? Podemos utilizar um quantificador para especificar um determinado intervalo

    # Dica: veja o exemplo-05 para relembra os quantificadores
*/

// const regExp = /\([0-9]{2}\) [0-9]{4}-[0-9]{4}/ //=> só aceita o telefone1
const regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/ // => aceita os 2 telefones

const telefone1 = "(19) 0123-4567"
const telefone2 = "(19) 01234-5678"

console.log(regExp.test(telefone1))
console.log(regExp.test(telefone2))