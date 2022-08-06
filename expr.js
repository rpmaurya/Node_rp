const express = require('express');
const app = express();

app.get('', (req, res) => {

    //for request data.....
    console.log('data send by bworser', req.query.name)
    res.send("hello" + req.query.name);
});

app.get('/about', (req, res) => {
    res.send('<h1>Welocome this is about us page</h1>');
});

app.get('/help', (req, res) => {
    res.send('hello this is help page');
});

app.listen(5000);
