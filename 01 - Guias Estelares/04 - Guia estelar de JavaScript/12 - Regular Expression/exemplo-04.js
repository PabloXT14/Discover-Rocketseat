/*
    # Telefone - Passo 4
    Chegou a hora de aceitar qualquer número de telefone, para isso precisamos flexibilizar a expressão regular por meio de grupos.

    # Grupos de caracteres
    [abc] - Aceita qualquer caractere dentro do grupo, nesse caso 'a', 'b' e 'c'
    [^abc] - Não aceita qualquer caractere dentro do grupo, nesse caso 'a', 'b' ou 'c'
    [0-9] - Aceita qualquer caractere entre 0 e 9
    [^0-9] - Não aceita qualquer caractere entre 0 e 9


*/

// const regExp = /^\(19\)9999-9999$/ // => resulta: false
const regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/ // => resulta: true
const telefone = "(21) 9876-1234"

console.log(regExp.test(telefone))

