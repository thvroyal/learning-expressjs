const express = require('express');

const app = express();
const port = 1002;

app.get('/',(req,res) => res.send('<h1>Hello ExpressJS</h1>'));
app.listen(port,() => console.log('Stating server at http://localhost:'+port));