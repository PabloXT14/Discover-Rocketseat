// Utilizando/Importando módulo de Eventos
const { EventEmitter } = require('events');
const ev = new EventEmitter()

const Messages = [
    "Amanhã tem jogo",
    "Todo mundo odeia o chris",
    "Sant Seya"
]

const Greetings = [
    "Hello",
    "Good evening",
    "It's nice to meet you"
]

// Ouvindo evento
ev.once('SendMessages', (messages) => {
    for(let mes of messages) {
        console.log(mes)
    }
})

// Emitindo Evento
ev.emit('SendMessages', Messages)
ev.emit('SendMessages', Greetings)

