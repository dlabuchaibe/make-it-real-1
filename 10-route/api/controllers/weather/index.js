const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('./../../../config');

router.route('/:city')
    .get((req, res)=>{
        const city = req.params.city;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${config.weatherApiKey}`; 
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then((json) =>{               
            res.send(json.main.temp.toString());
        });
    });

module.exports = router;