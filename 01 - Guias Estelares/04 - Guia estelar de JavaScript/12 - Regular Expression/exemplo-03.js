/*
    # Telefone - Passo 3
    Vamos evoluir novamente e agora, no nosso terceiro exemplo, temos que fazer com que o telefone seja reconhecido únicamente, não permitindo outros caracteres antes e depois!

    # Iniciando e finalizando com um determinado caractere
    ^ - Inicia com um determinado caractere
    $ - Finaliza com um determinado caractere

*/

const regExp = /^\(19\)9999-9999$/
// const telefone = "Ligue para (19)9999-9999, tratar com joão"//=> resulta: false

const telefone = "(19)9999-9999"//=> resulta: true

console.log(regExp.test(telefone))
