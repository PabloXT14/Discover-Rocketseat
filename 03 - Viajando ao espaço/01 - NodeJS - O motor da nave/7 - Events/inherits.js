// util => outro módulo nativo do NodeJS
// inherits => função que ajuda a passar como herança o EventEmitter para outras funções/módulos
const { inherits } = require('util')
const { EventEmitter } = require('events')

// Função que herdara o EventEmitter
function Truco() { }

// Passando EventEmitter como herança de Truco
inherits(Truco, EventEmitter)

// Acessando as propriedades de Eventos através do Character
const pontosTruco = new Truco() 

pontosTruco.on('Truco', () => console.log('Toma seis ladrão!!!'))

console.log('Truco!!!')
pontosTruco.emit('Truco')