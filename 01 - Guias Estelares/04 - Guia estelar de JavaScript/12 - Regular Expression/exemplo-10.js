/*
    # Telefone - Passo 10
    Chegou a hora de extrair os telefones das linhas da tabela! Vamos extrair o telefone da primeira linha.

    # String API
    match - Executa uma busca na String e retorna um array contendo os dados encontrados, ou null.
    split - Dividea String com base em um outra String fixa ou expressão regular.
    replace - Substitui partes da String com base em uma outra String fixa ou expressão regular

*/

const regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/ // => retorna só o primeiro telefone encontrado

const telefone = `<table><tr><td>(19) 12345-1234</td><td>(21) 9999-9999</td><td>(24) 987654321</td></tr></table>`

console.log(telefone.match(regExp))