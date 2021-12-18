const express = require("express");
const cors = require("cors");

const app = express();
// Middlewares
app.use(express.json());//express entender formato json
app.use(cors())//CORS(Compartilhamento de recursos de origem cruzada) é um pacote node.js para fornecer um middleware Connect / Express que pode ser usado para habilitar CORS com várias opções.


/* Array de users (DB fake) */
let users = [
    {
        id: 1,
        name: 'John Doe I',
        avatar: 'https://source.unsplash.com/random',
        city: 'São Paulo'
    }
]

app.get('/api', (request, response) => {
    response.json({ users })
});

app.get('/api/:id', (request, response) => {
    const { id: userId } = request.params;

    const userSearch = users.find(user => Number(user.id) === Number(userId))

    if (!userSearch) return response.json('User not founded!')

    return response.json(userSearch);
})

app.post('/api', (request, response) => {
    const lastId = users[users.length - 1].id;
    const { name, avatar, city } = request.body;

    users.push({
        id: lastId + 1,
        name: name,
        avatar: avatar,
        city: city
    })

    return response.json("Saved user");
});

app.put('/api/:id', (request, response) => {
    const { id: userId } = request.params;// Route params
    const { name, avatar, city } = request.body;//Body params

    // Verificando se user existe no array
    const user = users.find(user => Number(user.id) === Number(userId))

    // Caso não
    if (!user) {
        return response.json('User not founded!')
    }

    // Caso sim (realiza o update)
    const updatedUser = {
        ...user,
        name: name,
        avatar: avatar,
        city: city
    }

    users = users.map(user => {
        if (Number(user.id === Number(userId))) {
            user = updatedUser;
        }
        return user
    });

    response.json('Updated user');
});


app.delete('/api/:id', (request, response) => {
    const { id: userId } = request.params;

    users = users.filter(user => Number(user.id) !== Number(userId))

    response.json('Deleted user!')
})


app.listen(3333, () => console.log("API rodando na porta 3333"));