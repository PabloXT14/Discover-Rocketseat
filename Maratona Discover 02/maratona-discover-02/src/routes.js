const express = require("express")
const routes = express.Router()// funcionalidade do express para criar rotas

/*
    Criando rotas dos outros arquivos .html => igual no server.js, mas fica em um arquivo separado para ter organização
*/

const basePath = __dirname + "/views"// __dirname => retorna diretorio em que o script esta contido



/* === Enviando arquivos diretamente === */

// // rota de redirecionamento (para a mesma página)
// routes.get("/index.html", (request, response) => {
//     return res.redirect("/")
// })

// // rota do arquivo job.html 
// // routes.get("/job", (req, res) => {
// //     return res.sendFile(basePath + "/job.html")
// // })
// /* Dica: quando a função tem só uma linha, podemos declarar da seguite maneira para retornaR algo*/
// routes.get("/job", (req, res) => res.sendFile(basePath + "/job.html"))
// // rota arquivo job-edit
// routes.get("/job/edit", (req, res) => res.sendFile(basePath + "/job-edit.html"))
// // rota arquivo profile 
// routes.get("/profile", (req, res) => res.sendFile(basePath + "/profile.html"))


/* === Entregando arquivos renderizados (no caso, pelo EJS) === */

// * Lembrando: o EJS le por padrão a pasta 'views'

const views = __dirname + "/views/"

routes.get("/", (req, res) => res.render(views + "index.ejs"))
routes.get("/job", (req, res) => res.render(views + "job.ejs"))
routes.get("/job/edit", (req, res) => res.render(views + "job-edit.ejs"))
routes.get("/profile", (req, res) => res.render(views + "profile.ejs"))


/* Exportando nossas rotas */
module.exports = routes;