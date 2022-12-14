const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

let Port = process.env.PORT || 3000;




app.use(express.static("public"));

app.get ('/', (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/home.html"))
});

app.get ('/register', (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/register.html"))
});

app.get ('/login', (req, res)=>{
    res.sendFile(path.join(__dirname,"/views/login.html"))
});

app.listen(port, () => console.log('listening in port' + port));