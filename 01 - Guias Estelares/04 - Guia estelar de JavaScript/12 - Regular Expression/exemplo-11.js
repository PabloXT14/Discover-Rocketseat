/*
    # Telefone - Passo 11
    Agora, vamos extrair o telefone de todas as linhas

    # Modificadores (mais comuns)
    i  - Case-insensitive matching (procura uma string fixa ou expressão regular sem distinção entre maiúsculas e minúsculas)
    g - Global matching (busca por toda uma string)
    m - Multiline matching (busca por testo que tenha quebras de linha)
*/

const regExp1 = /\(\d{2}\)\s\d{4,5}-?\d{4}/g // => retorna um array com todos os tefefones encontrados
const regExp2 = /\(\d{2}\)/g // retornando só o código de área
const regExp3 = /\d{4,5}-?\d{4}/g // retorna somente os telefones


const telefone = `<table><tr><td>(19) 12345-1234</td><td>(21) 9999-9999</td><td>(24) 987654321</td></tr></table>`

console.log(telefone.match(regExp1))
console.log(telefone.match(regExp2))
console.log(telefone.match(regExp3))