'use strict';
const weatherMongo = require('../persistance/mongo_weather');
const tools = require('../util/tools');
const request = require('request');
const CONFIG = require('../../configuration');

exports.currentWeatherDate = async (req, res, ip) => {
    try {
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
        let {result, err} = await getWeatherInfo(_id,req.query.type);
        if (err) {
            res.status = 500;
            res.json({err:getCityErr});
            return
        }
        res.status = 200;
        res.json(result)
    }catch (e) {
        res.status = 500;
        res.json({err:e})
    }
};

function getWeatherInfo(cityId,type) {
    return new Promise((resolve, reject) => {
        request({
            method: "GET",
            url: `http://api.openweathermap.org/data/2.5/${type}?id=${cityId}&APPID=${CONFIG.OPENWEATHERAPIKEY}`
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
