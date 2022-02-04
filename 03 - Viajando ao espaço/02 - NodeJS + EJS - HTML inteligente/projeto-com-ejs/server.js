const express = require('express');

const app = express();

app.set("view engine", "ejs");


/* ROTAS */
app.get("/", (req, res) => {
    const users = [
        { name: 'John Doe', age: 18, email: 'johndoe2022@gmail.com' },
        { name: 'Diego Fernandes', age: 25, email: 'diego2022@gmail.com' },
        { name: 'Mayk Brito', age: 32, email: 'maykbrito2022@gmail.com' }
    ]


    res.render('pages/index', { users: users });
});

app.get("/about", (req, res) => {
    res.render('pages/about');
});

app.listen(8080, () => { console.log("Server running on port 8080") });