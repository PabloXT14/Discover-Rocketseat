// setInterval irá rodar uma função N vezes depois de X milissegundos
const timeOut = 2000
const checking = () => console.log(`checked!`)

setInterval(checking, timeOut)


/* ============ Outros Testes ========== */

// const Messages = [
//     "1",
//     "2",
//     "3",
//     "4"
// ]

// let message = 0

// const fc = () => {
//      console.log(Messages[message])
//      message++
//      if(message === Messages.length) {
//          clearInterval(interval)
//      }
// }

// const interval = setInterval(fc, 2000)