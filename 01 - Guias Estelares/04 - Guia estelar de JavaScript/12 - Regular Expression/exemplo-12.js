/*
    # Telefone - Passo 12
    Por fim, vamos substituir todos os telefones da tabela!

    # Dica: utilize os replace
    replace("expressão/string a ser substituida", "caracter que ficará no lugar")
*/

const regExp = /\(\d{2}\)\s\d{4,5}-?\d{4}/g

const telefone = `<table><tr><td>(19) 12345-1234</td><td>(21) 9999-9999</td><td>(24) 987654321</td></tr></table>`

console.log(telefone.replace(regExp, "TELEFONE"))