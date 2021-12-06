const express = require("express");

const app = express();
/* GET
sintaxe: 
    get("path", (request, response)=> {})
- path: é o caminho da rota (que irá aparecer depois http:localhost:3333 na URL)
- request: dados que nos-clientes enviamos na requisição/pedido
- response: resposta do servidor ao nosso request/pedido
*/

app.get("/", (request, response) => {
    return (
        // response.send("Hello World!") // sendo(): response do tipo string
        response.json({ message: "Hellow World Ignite" }) // json(): response do tipo array, objecto, string 
    );
});

app.listen(3333);


