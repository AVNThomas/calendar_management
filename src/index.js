const path = require('path');
const express = require('express');

const app = express();
const paths = ['homer', 'marge', 'bart', 'lisa'];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index');
});

paths.forEach((p) => {
    app.get(`/${p}`, (req, res) => {
        res.render(p);
    })
})

module.exports = app;

const PORT = 3000;

app.listen(PORT ,() => {
    console.log('app listen on port: ' + PORT)
});
