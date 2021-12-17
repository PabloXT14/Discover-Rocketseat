const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

const customers = [];//DB fake


/* Dados de uma conta:
- cpf - string
- name - string
- id - uuid(identificador unico universal - um id único ) -> yarn add uuid 
- statement - []
*/


/* Rota para criação de conta */
app.post('/account', (request, response) => {
    const { cpf, name } = request.body;
    const id = uuidv4();//gerando nosso id randomico

    customers.push({
        cpf,
        name,
        id,
        statement: []
    });

    // 201: status para quando um dado for criado com sucesso no DB
    return response.status(201).json(customers);
});

app.listen(3333);