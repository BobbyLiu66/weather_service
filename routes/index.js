const express = require('express');
const router = express.Router();
const weather = require('../src/service/weather');
/* GET home page. */
router.get('/weather', (req, res) => {
    const ipAddress = req.connection.remoteAddress.replace("::ffff:","");
    const result = weather.currentWeatherDate(ipAddress);
    res.status = 200;
    res.json(result)
});

module.exports = router;
