const { EventEmitter } = require('events')

const ev = new EventEmitter()

// função que serve para ouvir/ver os eventos emitidos (todos as execuções de evento emitido)
ev.on('saySomething', (message) => {
    console.log('Eu ouvi você ', message)
}) 

// função que serve para ouvir/ver os eventos emitidos (apenas uma vez)
// ev.once('saySomething', (message) => {
//     console.log("Eu ouvi você ", message)
// })

// função para emitir eventos
ev.emit('saySomething', "Pablo Alan")
ev.emit('saySomething', "Mayk Brito")
ev.emit('saySomething', "Wenes Soares")








