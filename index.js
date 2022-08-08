
const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname, 'public');
app.get('', (req, resp) => {
    resp.sendFile(`${publicpath}/index.html`)
}),
    app.get('/about', (req, resp) => {
        resp.sendFile(`${publicpath}/about.html`)
    }),
    app.get('/help', (req, resp) => {
        resp.sendFile(`${publicpath}/help.html`)
    }),
    app.get('*', (req, resp) => {
        resp.sendFile(`${publicpath}/pnf.html`)
    })

//app.use(express.static(publicpath));
app.listen(5000);
