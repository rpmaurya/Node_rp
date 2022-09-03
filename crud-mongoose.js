const express = require('express');
const nodeTut = require('./node-tut');
require('./config');

const app = express();
app.use(express.json());
app.post('/create', async (req, resp) => {
    let data = new nodeTut(req.body);
    let result = await data.save();
    console.log(result);
    resp.send(result);
});

app.get('/list', async (req, resp) => {
    let data = await nodeTut.find();
    resp.send(data)
});

app.delete('/delete/:_id', async (req, resp) => {
    console.log(req.params);
    let data = await nodeTut.deleteOne(req.params);
    resp.send(data)
})

app.put('/update/:_id', async (req, resp) => {
    console.log(req.params);
    let data = await nodeTut.updateOne(

        req.params
        ,
        {
            $set: req.body
        });
    resp.send(data)
})
app.listen(5000);