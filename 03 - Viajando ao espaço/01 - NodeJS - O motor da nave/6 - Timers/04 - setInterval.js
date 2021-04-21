// setInterval irá rodar uma função N vezes depois de X milissegundos
const timeOut = 2000
const checking = () => console.log(`checked!`)

setInterval(checking, timeOut)