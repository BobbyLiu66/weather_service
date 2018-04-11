'use strict';
const weatherMongo = require('../persistance/mongo_weather');
const tools = require('../util/tools');
const request = require('request');
const log = require('bunyan');

exports.currentWeatherDate = async (req, res, ip) => {
    let {city, countryCode, getIpErr} = await tools.getIpLocation(ip);
    if (getIpErr) {
        res.status = 500;
        res.json({err:getIpErr});
        return
    }
    let {_id, getCityErr} = await weatherMongo.getCityId(city, countryCode);
    if (getCityErr) {
        res.status = 500;
        res.json({err:getCityErr});
        return
    }
    let {result, err} = await getWeatherInfo(_id);
    if (err) {
        res.status = 500;
        res.json({err:getCityErr});
        return
    }
    console.log("city:",result.name);
    res.status = 200;
    res.json(result)
};

function getWeatherInfo(cityId) {
    return new Promise((resolve, reject) => {
        request({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=676fb922b841e438eab020fcd29eaba6`
        }, (err, res, body) => {
            if (err) reject(err);
            resolve(JSON.parse(body))
        })
    }).then((body) => {
        return {result: body}
    }, (err) => {
        return {err: err}
    })
}