// Require: é uma funcionalidade do pacote node_modules, que irá buscar o a biblioteca/função 'express' para criarmos nosso servidor
const express = require("express")

const server = express()


/*
get: propriedade do 'express' que serve para executar o método/verbo HTTP get no nosso servidor, ou seja, buscando algo, recebe os argumentos
    - rota de acesso ao GET
    - Função a ser execuatda
*/

/*
    Fluxo: request, response (perguntas e respostas)
    - request: pedindo um recurso ao servidor
    - response: resposta do servidor ao request
    - aparecem como argumentos da função executada dentro dos métodos/verbos HTTP
*/
server.get('/', (request, response) => {
    // console.log('entrei no index')

    // servirá para encerrar a função
    return response.send('OIE')
})


/* 
listen: propriedade/função do 'express' que cria o servidor, recebe como argumentos:
    - Porta do servidor(qlq número)
    - Função a ser executada
*/
server.listen(3000, () => console.log("rodando server"))

