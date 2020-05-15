const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const config = require('./../../../config');

//http://localhost/api/weather/Barranquilla
router.route('/:city')
    .get((req, res)=>{
        const city = req.params.city;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.weatherApiKey}`)
        .then(res => res.json())
        .then(json =>{
                const data = json;
                res.send(data);
            }
        );
    });

module.exports = router;