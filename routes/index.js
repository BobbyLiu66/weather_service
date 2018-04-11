const express = require('express');
const router = express.Router();
const requestIp = require('request-ip');
const weather = require('../src/service/weather');
const type = {current:"weather",forecast:"forecast"};

router.get('/weather', (req, res) => {
    if(!type.hasOwnProperty(req.query.type)){
        res.status = 401;
        res.json({err:"wrong type"});
    }
    else {
        req.query.type = type[req.query.type];
        const clientIp = requestIp.getClientIp(req);
        weather.currentWeatherDate(req,res,clientIp);
    }
});


module.exports = router;
