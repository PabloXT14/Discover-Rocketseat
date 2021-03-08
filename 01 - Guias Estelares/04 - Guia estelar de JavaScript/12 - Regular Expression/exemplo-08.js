/*
    # Telefone - Passo 8
    E se o telefone agora estiver em uma estrutura de tabela, como fazer para reconhecer cada linha?

    # Dica: relembre todos os conhecimentos dos exmplos anteriores para entender

*/

// const regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/ //=> não reconhece dentro da tabela
const regExp = /<table><tr>(<td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td>)+<\/tr><\/table>/ // => reconhece dentro da table


const telefone = `<table><tr><td>(19) 12345-1234</td><td>(21) 9999-9999</td><td>(24) 987654321</td></tr></table>`

console.log(regExp.test(telefone))


/* Outros Testes */
// const mess = `dbjsdbgjbdsbs123.456.789-3jdsbvdbvjhdvbshbdvhjsbdvhbdbv
// dvbsbdvjbsdjvbsjdbvjsdbvjbs987654321-21jsd vjsbvj sdjvbjsdvbjsdbvjsbdvjsdvjsbvjsdvbdjsvbj 
// jdsbvjsdbvjsbdjvjsdbvjsbdv478.082878-3A`
// const reCpfs = /\d{3}.?\d{3}.?\d{3}-[a-zA-Z0-9]{2}/gi
// console.log(mess.match(reCpfs))