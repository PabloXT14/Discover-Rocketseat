/*
    # Telefone - Passo 5
    Não é muito grupo? Para evitar a repetição exagerada de padrões em uma expressão regular, podemos utilizar quantificadores.

    # Quantificadores - Parte 1
    Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres
    {n}   - Quantifica um número específico
    {n,}  - Quantifica um número mínimo
    {n,m} - Quantifica um número mínimo e um número máximo 

*/

// const regExp = /\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/ // sem quantificador
const regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/ // com quantificador
const telefone = "(21) 9876-1234"

console.log(regExp.test(telefone))