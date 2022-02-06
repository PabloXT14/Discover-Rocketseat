const express = require('express');

const app = express();

app.set("view engine", "ejs");


/* ROTAS */
app.get("/", (req, res) => {
    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil',
        },
        {
            title: 'E',
            message: 'JS usa JavaScript para renderizar HTML',
        },
        {
            title: 'M',
            message: 'uito fácil de usar',
        },
        {
            title: 'A',
            message: 'morzinho',
        },
        {
            title: 'I',
            message: 'nstall ejs',
        },
        {
            title: 'S',
            message: 'intaxe simples',
        }
    ]

    const subtitle = 'Uma linguagem de modelagem para criação de páginas HTML utilizando JS';

    res.render('pages/index', { qualitys: items, subtitle: subtitle });
});

app.get("/about", (req, res) => {
    res.render('pages/about');
});

app.listen(8080, () => { console.log("Server running on port 8080") });