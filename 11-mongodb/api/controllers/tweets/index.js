const express = require('express');
const router = express.Router();
const Tweet = require('./../../models/tweets');

//referencio el móudlo que contiene la función para obtener la fecha
const dateUtilities = require('./../../utilities/date');

router.route('/')
    .get((req, res)=>{
        Tweet.find({})
        .then(tweets=>{
            res.status(200).send(tweets);
        })
    })
    .post((req, res)=>{
        //crear el objeto que se va a guardar
        const tweet = {
            content: req.body.content,
            date: dateUtilities.getDate()
        };

        Tweet.find({content: tweet.content})
        .then(tweets=>{
            if(tweets.length>0){
                res.status(500).send({message: 'Ya existe un elemento con el mismo contenido'});
            }else{
                const object = new Tweet(tweet);
                object.save()
                .then(()=>{
                    res.status(200).send({message: 'El tweet ha sido creado'});
                });
            }    
        });

        
    })
    .put((req, res)=>{
        const tweet = {
            id: req.body.id,
            content: req.body.content
        };
        Tweet.update({id: tweet.id}, {content: tweet.content})
        .then(()=>{
            res.status(200).send({message: 'El elemento fue actualizado'});
        });

        res.status(200).send({message: 'El tweet ha sido actualizado'});
    })
    .delete((req, res)=>{
        Tweet.remove({})
        .then(()=>{
            res.status(200).send({message: 'Todos los tweets han sido eliminados'});
        });
    });
router.route('/:id')
    .get((req, res)=>{
        const id = req.params.id;
        Tweet.find({_id: id})
        .then(tweet=>{
            res.status(200).send(tweet);
        })
        .catch(err=>{
            res.status(400).send({message: 'No existe el elemento'});
        })
    })
    .delete((req, res)=>{
        const id = req.params.id;
        Tweet.remove({_id: id})
        .then(()=>{
            res.status(200).send({message: `El elemento con id: ${id} ha sido eliminado`});
        });
    });

module.exports = router;