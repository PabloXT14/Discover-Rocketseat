// throw (lançar) - lança os erros da aplicação para o catch
// *Obs: é preciso usar o <throw> com o <try/catch>
function sayMyName(name = '') {
    if (name === '') {
        // throw new Error("Nome é obrigatório")
        throw 'Nome é obrigatório'
    }
    if (typeof name === 'number') {
        throw 'Tipo incorreto de dado'
    }
    console.log(name)
}


// try...catch (tentar...pegar) - testa algo e captura os erros exitentes

try {

    sayMyName(22)

} catch (e) {
    // o 'e' serve para pegar o erro (enviado pelo throw ou não)
    console.log(e)
}

console.log('após executar o try/catch')