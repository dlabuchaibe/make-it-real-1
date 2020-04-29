//modules
const express = require('express');
const nocache = require('nocache');
const bodyParser = require('body-parser');

const config = require('./config');

//initializers
const app = express();

//variables
let users = [];
let tokens = [];

//functions
const listUsers = (users)=> {
    let cadena = '';

    for (u in users){
        cadena += `\nusername ${users[u].username}`;
    }
    return cadena;
}

//middlewares
const logger = (req, res, next) => {
    console.log("Hubo una petición HTTP");
    next();
};
const auth = (req, res, next) => {
    const token = req.headers['token'];
    tokens.includes(token) ? 
        next()
    :
        res.status(500).send('Usuario no autorizado')

};

//config
app.use(nocache());
app.use(bodyParser.json());
app.use(logger);

//routes
app.get('/', (req, res)=>{
    res
    .sendStatus(500);
});
app.get('/users', auth, (req, res)=>{
    res
    .status(200)
    .send(`Usuarios: ${listUsers(users)}`);
});
app.get('/users/:id', auth, (req, res)=>{
    res
    .status(200)
    .send(`El usuario en la posición ${id} es ${users[id].username}`)
});
app.post('/users',(req, res)=>{
    let user = {
        username: req.body.username,
        password: req.body.password
    };
    users.push(user);
    res
    .status(200)
    .send(`El usuario ${user.username} fue creado`);
});
app.post('/users/login', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    //buscar el usuario a autenticar en el objeto users
    if(!!users.find(user => user.username === username && user.password === password)){   
        const r = Math.random();
        tokens.push(r.toString());
        res
        .status(200)
        .send(`{token: ${r} }`);
    }else{    
        res
        .status(500)
        .send(`Datos no válidos`);
    }    
});

//server
app.listen(config.port, ()=>{
    console.log('Servidor iniciado');
});
