/*
To do:
Midleware:
- Verificar si el usuario existe (middleware)
- Logout 
- Actualizar usuario
- Eliminar usuario
*/
//modules
const express = require('express');
const nocache = require('nocache');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
//const bcrypt = require('bcrypt'); 
//bcryptjs for mac
const bcrypt = require('bcryptjs');

const config = require('./config');

//initializers
const app = express();

//variables
let usersArray = [];
const accessLogStream = fs.createWriteStream(`./${config.files.path}/${config.files.filename.accessLog}`, { flags: 'a' })

//functions
const listUsers = (users)=> {
    let cadena = '';

    for (u in users){
        cadena += `\nusername ${users[u].username}`;
    }
    return cadena;
}

//middlewares
const auth = (req, res, next) => {
    //obtener el token de los headers de la petición
    const token = req.headers['x-access-token'];
    let decoded;    
    try{
        decoded = jwt.verify(token, config.tokenKey);
    }catch(error){
        decoded = false;
    }
    !!decoded ? 
        //si la respuesta es válida, continuar
        next()
    :
        //si la respuesta no es válida, responder un mensaje de error
        res.status(500).send('Usuario no autorizado')
    
};
//config
app.use(nocache());
app.use(bodyParser.json());
app.use(morgan('combined', { stream: accessLogStream }));

//routes
    //principal
    app.get('/', (req, res)=>{
        res
        .sendStatus(500);
    });
    app.get('/date', (req, res)=>{
        res
        .status(200)
        .send(Date());
    });
    //privadas (usan middleware de autenticación)
    app.get('/users', auth, (req, res)=>{
        res
        .status(200)
        .send(`Usuarios: ${listUsers(usersArray)}`);
    });
    app.get('/users/:id', auth, (req, res)=>{
        res
        .status(200)
        .send(`El usuario en la posición ${id} es ${users[id].username}`)
    });
    //públicas (sin middleware)
    app.post('/users',(req, res)=>{
        const plainPassword = req.body.password;
        const salt = bcrypt.genSaltSync(config.saltRounds);
        const hash = bcrypt.hashSync(plainPassword, salt);

        let user = {
            username: req.body.username,
            password: hash
        };
        //agregar el usuario al arreglo users (mejora futura: validar que el mismo username no exista)
        usersArray.push(user);
        res
        .status(200)
        .send(`El usuario ${user.username} fue creado 
        con la contraseña ${user.password}`);
    });
    app.post('/users/login', (req, res)=>{
        const username = req.body.username;
        const password = req.body.password;
        //buscar el usuario a autenticar en el arreglo users
        if(!!usersArray.find(user => 
                                user.username === username && 
                                bcrypt.compareSync(password, user.password)
                            )){   
            const token = jwt.sign({username: username}, config.tokenKey);
            
            res
            .status(200)
            //enviar como respuesta el token 
            .send(`{token: ${token} }`);
        }else{    
            res
            .status(500)
            .send(`Datos no válidos`);
        }    
    });

//server
app.listen(config.port, ()=>{
    fs.readFile(`./${config.files.path}/${config.files.filename.users}`, 'utf8', (err, data)=>{
        if(err){
            console.log("Ocurrió un error leyendo el archivo");
        }
        usersArray = JSON.parse(data);
    });

    console.log('Servidor iniciado');
});
