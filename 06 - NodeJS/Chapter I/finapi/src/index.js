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

/*  MIDDLEWARES */
function verifyIfExistsAccountCPF(resquest, response, next) {
    const { cpf } = resquest.headers;//pegando cpf do route params

    //check qual customer tem o cpf informado
    const customer = customers.find(customer => Number(customer.cpf) === Number(cpf))

    // Se customer não existe envia mesage de erro
    if (!customer) {
        return response.status(400).json({ error: "Customer not found" });
    }

    // Passando valor para a requisição (no caso, o request)
    resquest.customer = customer;

    // Se existe continua o fluxo de execução normal da requisição
    return next();
}

/* Funções Customizadas */
function getBalance(statement) {
    const balance = statement.reduce((acc, operation) => {
        if (operation.type === 'credit') {
            return acc + operation.amount;
        } else {
            return acc - operation.amount;
        }
    }, 0);

    return balance;
}


/* ROTAS */

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
app.get('/statement', verifyIfExistsAccountCPF, (request, response) => {
    const { customer } = request;
    return response.json(customer.statement);//retornando extrato do customer
});

/* Rota para realizar deposito em conta existente */
app.post('/deposit', verifyIfExistsAccountCPF, (request, response) => {
    const { description, amount } = request.body;

    const { customer } = request;//dado vindo da verificação do Middleware (dados da conta do cliente)

    // Criando objeto de deposito
    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: 'credit'
    }

    // Inserindo deposito na conta na customer
    customer.statement.push(statementOperation);

    return response.status(201).json({ message: "Inserted deposit with sucess" })
});


/* Rota para realizar saque em conta existente */
app.post('/withdraw', verifyIfExistsAccountCPF, (request, response) => {
    const { amount } = request.body;// quantia de saque
    const { customer } = request;// do Middleware

    const balance = getBalance(customer.statement);

    // Checando se pode fazer o saque (sem tem dinheiro sufuciente na conta)
    if (balance < amount) {
        return response.status(400).json({ error: "Insufficient founds!" });
    }

    // Realizando saque na conta
    const statementOperation = {
        amount,
        created_at: new Date(),
        type: 'debit',
    }
    customer.statement.push(statementOperation);

    return response.status(201).json({ mesage: "Withdraw made with sucess!" })

});


app.listen(3333, () => console.log("API running on port 3333"));