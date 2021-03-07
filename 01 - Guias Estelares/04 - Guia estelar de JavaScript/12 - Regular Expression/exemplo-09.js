/*
    # Telefone - Passo 9
    Em muitos casos, é possível subtituir os grupos por metacaracteres específicos!

    # Metacaracteres (mais usados)
    .  - Representa qualquer caractere
    \w - Representa o conjunto [a-zA-Z0-9_]
    \W - Representa o conjunto [^a-zA-Z0-9_]
    \d - Representa o conjunto [0-9]
    \D - Representa o conjunto [^0-9]
    \s - Representa o espaço em branco
    \S - Representa um não espaço em branco
    \n - Representa uma quebra de linha
    \t - Representa um tab

*/

// const regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/ // => sem metacaracteres
const regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/ //=> com metacaracteres

const telefone = `<table><tr><td>(19) 12345-1234</td><td>(21) 9999-9999</td><td>(24) 987654321</td></tr></table>`

console.log(regExp.test(telefone))