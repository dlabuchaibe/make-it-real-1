const express = require('express');
const router = express.Router();
//referencia al servicio
const tweetsModule = require('./../../services/tweets');
//referencio el móudlo que contiene la función para obtener la fecha
const dateUtilities = require('./../../utilities/date');

router.route('/')
    .get((req, res)=>{
        //llamado a leer tweets guardados
        res.status(200).send(tweetsModule.loadTweets());
    })
    .post((req, res)=>{
        //crear el objeto que se va a guardar
        const tweet = {
            id: tweetsModule.arrayLenght(),
            content: req.body.content,
            date: dateUtilities.getDate(),
            userId: req.body.userId
        };
        //llamado a guardar tweet
        tweetsModule.newTweet(tweet);
        res.status(200).send({message: 'El tweet ha sido creado'});
    });
router.route('/:id')
    .get((req, res)=>{
        res.send(`Página del tweet ${req.params.id}`);
    })
    .delete((req, res)=>{
        res.send(`Eliminar tweet ${req.params.id}`);
    })
    .put((req, res)=>{
        res.send(`Actualizar el tweet ${req.params.id}`);
    });

module.exports = router;