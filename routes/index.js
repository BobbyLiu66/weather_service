const express = require('express');
const router = express.Router();
const weather = require('../src/service/weather');
/* GET home page. */
router.get('/weather', (req, res) => {
    const ipAddress = req.connection.remoteAddress.replace("::ffff:","");
    weather.currentWeatherDate(req,res,ipAddress);

});

module.exports = router;
