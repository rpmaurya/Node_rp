
const express = require('express');
const app = express();

app.get('', (req, res) => {


    res.send(`<h2><center><font color=red>Welcome my first page</font></center></h2><a href="/about">go to about page</a>`);

});

app.get('/about', (req, res) => {
    res.send(`<h1><center>Registration Form</center></h1></br>
        User Name:<input type = "text"  placeholder = "user name" /></br>
        EmailId:<input type="text" placeholder ="email address"/></br></br>
        <button>click me</button><a href="/">go to home page</a>
         `);
});

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'rpmaurya',
            Email: 'ram@gmail.com'
        },
        {
            name: 'riya',
            Email: 'riya@gmail.com'
        }
    ]
    );
});

app.listen(5000);
