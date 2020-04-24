//modules
const express = require('express');
const nocache = require('nocache');
const bodyParser = require('body-parser');

const config = require('./config');

//initializers
const app = express();

//variables
let users = [];

//functions
const listUsers = (users)=> {
    let cadena = '';

    for (u in users){
        cadena += `\nid ${users[u].id} - nombre ${users[u].name}`;
    }
    return cadena;
}

//config
app.use(nocache());
app.use(bodyParser.json());

//routes
app.get('/', (req, res)=>{
    res
    .sendStatus(500);
});
app.get('/users', (req, res)=>{
    res
    .status(200)
    .send(`Usuarios: ${listUsers(users)}`);
});
app.get('/users/:id', (req, res)=>{
    res
    .status(200)
    .send(`Este es el usuario ${req.params.id}`)
});
app.post('/users',(req, res)=>{
    let person = {
        id: req.body.id,
        name: req.body.name
    };
    users.push(person);
    res
    .status(200)
    .send(`El usuario ${person.name} con id ${person.id} fue creado`);
});

app.put('/users',(req, res)=>{

});
app.delete('/users',(req, res)=>{
    
});

//server
app.listen(config.port, ()=>{
    console.log('Servidor iniciado');
});
