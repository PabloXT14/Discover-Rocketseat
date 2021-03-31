// Require: é uma funcionalidade do pacote node_modules, que irá buscar a biblioteca/função 'express' para criarmos nosso servidor
const express = require("express")
const server = express()
// Buscando as rotas
const routes = require("./routes")


/* === Configurando Template Engine === */
server.set("view engine", "ejs")// Maquina de visualização recebe o EJS


/* 
    Habilitanto rota para todos os arquivos statics/public(que não se alteram com frequência), no caso, o CSS e as imagens 
*/
server.use(express.static("public"))
/* Acessando as Rotas/Routes */
server.use(routes)



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
    // return response.send('OIE GALERA')

    /* == Enviando arquivo pelo servidor == */

    //retorna a localização do diretorio do server.js
    // console.log(__dirname)
    //retorna localização do arquivo
    // console.log(__dirname + "/views/index.html")


    // ** Maneira complexa de enviar **
    // return response.sendFile("/Users/pablo/Documents/Discover-Rocketseat/Maratona Discover 02/maratona-discover-02/index.html")

    // ** Maneira sintetizada de enviar **
    return response.sendFile(__dirname + "/views/index.html")
    
})

/* 
listen: propriedade/função do 'express' que cria o servidor, recebe como argumentos:
    - Porta do servidor(qlq número)
    - Função a ser executada
*/
server.listen(3000, () => console.log("rodando server"))

