const express = require('express');
const router = express.Router();
const Tweet = require('./../../models/tweets');
const User = require('./../../models/users');
const auth  = require('./../../middlewares/auth');


router.route('/')
    .get((req, res)=>{
        Tweet.find({})
            .populate('user', ["username"])
            .populate('comments.userId', ["username"])
            .sort({createdAt: -1})
            .then(response=>{
                res.status(200).send(response); 
            })
            .catch(err=>{
                res.status(500).send("ocurrió un error"); 
            })
    })
    .post(auth, (req, res)=>{
        //crear el objeto que se va a guardar
        const content = req.body.content;
        const image = req.body.image;
        const user = req._id;
        const likes = 0;
        const tweet = {
            content,
            image,
            user,
            likes
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
    .put(auth, (req, res)=>{
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
    .delete(auth, (req, res)=>{
        Tweet.remove({})
        .then(()=>{
            res.status(200).send({message: 'Todos los tweets han sido eliminados'});
        });
    });

    router.route('/like')
    .post(auth, (req, res)=>{
        const id = req.body.id;
        Tweet.update({_id: id}, { $inc: {likes: 1}})
        .then((response)=>{
            res.sendStatus(200);
        })
    });

router.route('/:username')
    .get((req, res)=>{
        const username = req.params.username;
        User.find({username: username})
        .then(user=>{
            userId = user[0]._id
            Tweet.find({user: userId})
                .populate('user', ["username"])
                .populate('comments.userId', ["username"])
                .sort({createdAt: -1})
                .then(response=>{
                    res.status(200).send(response); 
                })
                .catch(err=>{
                    res.status(500).send("ocurrió un error"); 
                })
        })
        .catch(err=>{
            res.status(400).send({message: 'No existe el usuario'});
        })

        
    })
    .delete(auth, (req, res)=>{
        const id = req.params.id;
        Tweet.remove({_id: id})
        .then(()=>{
            res.status(200).send({message: `El elemento con id: ${id} ha sido eliminado`});
        });
    });

module.exports = router;