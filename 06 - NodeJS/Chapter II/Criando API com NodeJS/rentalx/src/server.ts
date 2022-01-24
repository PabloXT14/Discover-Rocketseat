import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    response.json({ message: 'Hello world' });
});

app.post('/courses', (request, response) => {
    const { name } = request.body;

    response.json({ name });
});

app.listen(3333, () => {
    console.log('Server is running on port 3333!');
});
