const express = require('express');

const app = express();

app.use(express.static(__dirname + './public'));
app.set("view engine", "ejs");


/* ROTAS */
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/about", (req, res) => {
    res.render('about');
});

app.listen(8080, () => { console.log("Server running on port 8080") });