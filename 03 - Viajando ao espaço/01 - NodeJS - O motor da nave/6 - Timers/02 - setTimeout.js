// setTimeout rodar uma função depois de X milissegundos
const timeOut = 3000
const finished = () => console.log(`done!`)

// setTimeout(finished, timeOut)
console.log(`Mostrar`)// aparece antes da fução finished, este é um ex. de assincronismo

const functionCallBack = (message) => {
    console.log(message)
}

const Messages = [
    "Olá, tudo bem!",
    "Bom Dia",
    "Boa Tarde",
    "Boa Noite!"
]

functionCallBack(Messages[0])
// setTimeout(functionCallBack(Messages[0]), timeOut)


