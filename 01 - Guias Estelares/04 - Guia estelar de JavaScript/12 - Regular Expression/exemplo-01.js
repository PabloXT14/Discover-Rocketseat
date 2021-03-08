/*
    # RegExp API
    * exec - Executa a RegExp, retornando os detalhes
    * test - Testa a RegExp, retornando true ou false
*/

/*
    # Telefone - Passo 1
    - Nosso primeiro exemplo envolve o reconhecimento de um telefone simples: 9999-9999. Esse telefone será evoluído por meio de novos cenários para estimular a utilização de grupos, metacaracteres, quantificadores e muito mais!
*/

const regExp = /9999-9999/
// const regExp = new RegExp("9999-9999")
const telefone = "9999-9999"

// Com exec
console.log(regExp.exec(telefone))


// Com test
console.log(regExp.test(telefone))
