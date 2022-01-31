const express = require('express');

const app = express();

app.set("view engine", "ejs");


/* ROTAS */
app.get("/", (req, res) => {
    res.render('pages/index');
});

app.get("/about", (req, res) => {
    res.render('pages/about');
});

app.listen(8080, () => { console.log("Server running on port 8080") });