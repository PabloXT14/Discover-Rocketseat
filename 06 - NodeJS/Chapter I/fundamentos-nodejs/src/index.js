const express = require("express");

const app = express();
/* GET
sintaxe: 
    get("path", (request, response)=> {})
- path: é o caminho da rota (que irá aparecer depois http:localhost:3333 na URL)
- request: dados que nos-clientes enviamos na requisição/pedido
- response: resposta do servidor ao nosso request/pedido
*/

// app.get("/", (request, response) => {
//     return (
//         // response.send("Hello World!") // sendo(): response do tipo string
//         //response.json({ message: "Hellow World Ignite 🚀🚀🚀" }) // json(): response do tipo array, objecto, string 
//     );
// });


/* ===== Utilizando os Métodos HTTP ===== */
app.get("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3"]);
})

app.post("/courses", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
})

// para atualizar algo no DB(Banco de Dados) é preciso passar um parametro pela rota (neste caso estaremos passando o id do curso)
app.put("/courses:id", (request, response) => {
    return response.json(["Curso 1", "Curso 2", "Curso 2.1", "Curso 2.2"])
})

app.patch('/courses/:id', (request, response) => {
    return response.json(["Curso 1", "Curso 2.0", "Curso 2.1", "Curso 2.2"])
})

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso 1", "Curso 2.0", "Curso 2.1"])
})


app.listen(3333);//start servidor da nossa aplicação na porta 3333 (o qlq porta que vc quiser) 
// na url aparecerá http:localhost:3333


