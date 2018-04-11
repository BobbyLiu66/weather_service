const express = require('express');
const router = express.Router();
const requestIp = require('request-ip');
const weather = require('../src/service/weather');
/* GET home page. */
router.get('/weather', (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    weather.currentWeatherDate(req,res,clientIp);

});

module.exports = router;
