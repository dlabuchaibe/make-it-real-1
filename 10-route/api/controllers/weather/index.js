const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('./../../../config');

router.route('/:city')
    .get((req, res)=>{
        const city = req.params.city;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.weatherApiKey}`)
        .then((res) => {
            res.json()
        })
        .then((json) =>{                
            res.send(json);
        });
    });

module.exports = router;