// setTimeout rodar uma função depois de X milissegundos
const timeOut = 3000
const finished = () => console.log(`done!`)

setTimeout(finished, timeOut)
console.log(`Mostrar`)// aparece antes da fução finished, este é um ex. de assincronismo

