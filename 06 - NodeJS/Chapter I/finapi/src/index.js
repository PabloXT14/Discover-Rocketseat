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

    // Verificando se cpf já existe no DB 
    const customerAlreadyExists = customers.some(customer => customer.cpf === cpf);

    if (customerAlreadyExists) {
        return response.status(400).json({ error: "Customer already exists!" })
    }

    customers.push({
        id: uuidv4(), //gerando nosso id randomico
        name,
        cpf,
        statement: []
    });

    // 201: status para quando um dado for criado com sucesso no DB
    return response.status(201).json(customers);
});

/* Rota para listar extrado de um cliente */
app.get('/statement/:cpf', (request, response) => {
    const { cpf } = request.params;//pegando cpf do route params

    const customer = customers.find(customer => Number(customer.cpf) === Number(cpf));//check qual customer tem o cpf informado

    return response.json(customer.statement);//retornando extrato do customer
});

app.listen(3333, () => console.log("API running on port 3333"));