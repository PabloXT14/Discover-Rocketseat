/*
    # Telefone - Passo 2
    - Evoluímos nosso primeiro exemplo e agora o telefone tem código de área: (48) 9999-9999, como fazer para reconhecê-lo?

    # Escapando caracteres especiais
    \ - A barra é utilizada antes de caracteres especiais, com o objetivo de escapá-los.
*/

const regExp = /\(19\)9999-9999/
const telefone = "(19)9999-9999"

console.log(regExp.test(telefone))
