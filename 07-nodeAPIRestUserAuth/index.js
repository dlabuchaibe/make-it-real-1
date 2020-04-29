//modules
const express = require('express');
const nocache = require('nocache');
const bodyParser = require('body-parser');

const config = require('./config');

//initializers
const app = express();

//variables
const users = [];
const tokens = [];

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
    //obtener el token de los headers de la petición
    const token = req.headers['token'];
    //buscar en el arreglo tokens el token obtenido anteriormente
    tokens.includes(token) ? 
        //si la respuesta es válida, continuar
        next()
    :
        //si la respuesta no es válida, responder un mensaje de error
        res.status(500).send('Usuario no autorizado')

};

//config
app.use(nocache());
app.use(bodyParser.json());
//usar el middelware logger en todas las peticiones
app.use(logger);

//routes
    //principal
    app.get('/', (req, res)=>{
        res
        .sendStatus(500);
    });
    //privadas (usan middleware de autenticación)
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
    //públicas (sin middleware)
    app.post('/users',(req, res)=>{
        let user = {
            username: req.body.username,
            password: req.body.password
        };
        //agregar el usuario al arreglo users (mejora futura: validar que el mismo username no exista)
        users.push(user);
        res
        .status(200)
        .send(`El usuario ${user.username} fue creado`);
    });
    app.post('/users/login', (req, res)=>{
        const username = req.body.username;
        const password = req.body.password;
        //buscar el usuario a autenticar en el arreglo users
        if(!!users.find(user => user.username === username && user.password === password)){   
            //generar un token aleatorio
            const r = Math.random();
            //guardar el token en el arreglo tokens
            tokens.push(r.toString());
            res
            .status(200)
            //enviar como respuesta el token 
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
