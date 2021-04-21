// clearInterval irá cancelar um setInterval registrado
const timeOut = 1000
const checking = () => console.log(`checked!`)

let interval = setInterval(checking, timeOut)

// cancelando/limpando o setInterval depois de 4s
setTimeout(() => clearInterval(interval), 4000)