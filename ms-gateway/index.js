var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const httpProxy = require('express-http-proxy')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("Simple API Gateway")
})

app.get('/users/profile', (req, res, next) => {
    const userServiceProxy = httpProxy('http://localhost:3003/users/profile')
    userServiceProxy(req, res, next)
});

app.get('/verify/token', (req, res, next) => {
    const userServiceProxy = httpProxy('http://localhost:3001/verify/token')
    userServiceProxy(req, res, next)
});

app.post('/users/register', (req, res, next) => {
    const userServiceProxy = httpProxy('http://localhost:3002/users/register')
    userServiceProxy(req, res, next)
});

// app.use(router)

console.log("Simple API Gateway run on localhost:3000")

app.listen(3000);