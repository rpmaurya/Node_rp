const express = require('express');
const con = require('./confrigi');
const app = express();

app.use(express.json());
app.get('/', (req, resp) => {
    con.query("select*from users", (err, result) => {
        if (err) {
            resp.send("error");
        } else {
            resp.send(result);
        }

    })

});

app.post('/', (req, resp) => {
    const data = req.body;
    con.query("insert INTO users SET ?", data, (error, result, field) => {
        if (error) throw error;
        resp.send(result)

    });
});

app.put('/:id', (req, resp) => {
    const data = [req.body.name, req.body.password, req.body.email, req.params.id]
    con.query("UPDATE users SET name= ?,password = ?,email = ? where id = ?", data, (error, result, field) => {
        if (error) throw error;
        resp.send(result)

    });
});

app.delete('/:id', (req, resp) => {

    con.query("DELETE FROM users WHERE id=" + req.params.id, (error, result, field) => {
        if (error) throw error;
        resp.send(result)

    });

});

app.listen(5000);