const express = require('express');
const nodeTut = require('./node-tut');
require('./config');

const app = express();
app.use(express.json());

app.get('/search/:key', async (req, resp) => {
    console.log(req.params.key);
    let data = await nodeTut.find({
        "$or": [
            { "name": { $regex: req.params.key } },
            { "address": { $regex: req.params.key } }
        ]
    });
    resp.send(data);
});
app.listen(5000);