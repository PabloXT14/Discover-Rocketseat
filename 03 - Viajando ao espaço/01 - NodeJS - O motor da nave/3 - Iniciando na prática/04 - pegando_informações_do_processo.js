/*
    * process
        - variavél global do NodeJS que serve para pegar informações de um determinado processo que se está executando
        - possui várias propriedades que podem ser utilizadas:
            * 'argv' (um array que além de conter o nome da localização do arquivo executado, guarda outros carateres que digitamos no terminal, em sintexe o argv é 'uma lista de argumentos')
        ...

        * explicação formal:
            - O 'process' é um objeto 'global' que fornece informações e controle sobre o processo atual do Node.js. Como um global, está sempre disponível para aplicativos Node.js sem usar require(). Ele também pode ser acessado explicitamente usando require()
*/

const firstName = process.argv[2]
const lastName = process.argv[3]

// console.log(`Localização do arquivo executado: ${process.argv[1]}`)
// console.log(process.argv) // => array com a lista de argumentos
console.log(`Seu nome é ${firstName} ${lastName}`)