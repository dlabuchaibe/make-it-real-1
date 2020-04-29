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
        cadena += `\nid ${users[u].id} - nombre ${users[u].name}`;
    }
    return cadena;
}

//middlewares
const logger = (req, res, next) => {
    console.log("Hubo una petición HTTP");
    next();
};
const auth = (req, res, next) => {
    const token = req.headers.token;
    //BUSCAR EL TOKEN EN EL ARREGLO TOKENS
    true ? 
        next()
    :
        res.sendStatus(500)

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
    .send(`Este es el usuario ${req.params.id}`)
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
    let user = {
        username: req.body.username,
        password: req.body.password
    };
    //VERIFICAR SI EL OBEJTO USER EXISTE EN EL ARREGLO USERS
    if(true){   
        const r = Math.random*100;
        tokens.push(r);
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
