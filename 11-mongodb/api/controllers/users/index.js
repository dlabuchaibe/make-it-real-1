const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('./../../models/users');
const config = require('./../../../config');

router.route('/')
    .get((req, res)=>{
        User.find({})
        .then(users=>{
            res.status(200).send(users);
        })
    })
    .post((req, res)=>{
        const password = req.body.password;
        const salt = bcrypt.genSaltSync(config.saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const user = {
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: hash
        };

        User.find({ $or: [{username: user.username}, {email: user.email} ]})
        .then(users=>{
            if(users.length>0){
                res.status(500).send({message: 'Ya existe un usuario con el mismo correo o el mismo nombre del usuario'});
            }else{

                const object = new User(user);
                object.save()
                .then(()=>{
                    res.status(200).send({message: 'El usuario ha sido creado'});
                });
            }    
        });

        
    })
    .put((req, res)=>{

        res.status(200);
    })
    .delete((req, res)=>{
        User.remove({})
        .then(()=>{
            res.status(200).send({message: 'Todos los usuarios han sido eliminados'});
        });
    });
router.route('/:id')
    .get((req, res)=>{
        const id = req.params.id;
        User.find({_id: id})
        .then(user=>{
            res.status(200).send(user);
        })
        .catch(err=>{
            res.status(400).send({message: 'No existe el usuario'});
        })
    })
    .delete((req, res)=>{
        const id = req.params.id;
        User.remove({_id: id})
        .then(()=>{
            res.status(200).send({message: `El usuario con id: ${id} ha sido eliminado`});
        });
    });

module.exports = router;