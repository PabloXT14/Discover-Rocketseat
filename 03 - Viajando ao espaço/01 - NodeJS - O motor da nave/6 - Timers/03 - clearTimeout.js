// clearTimeout cancelar um timeOut
const timeOut = 3000
const finished = () => console.log(`Done!`)

// Criando um timeOut
let timer = setTimeout(finished, timeOut)

// Limpando tempo de saída
clearTimeout(timer)
