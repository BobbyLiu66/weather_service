const express = require('express');
const router = express.Router();
const weather = require('../src/service/weather');

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log(req.connection.remoteAddress);
    // weather.currentWeatherDate(req.connection.remoteAddress);
    next()
});




module.exports = router;
