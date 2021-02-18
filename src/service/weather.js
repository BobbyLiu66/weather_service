'use strict';
const tools = require('../util/tools');
const request = require('request');


exports.currentWeatherDate = async (req, res, ip) => {
    try {
        const {city, countryCode, getIpErr} = await tools.getIpLocation(ip);
        if (getIpErr) {
            console.error(`ip: ${ip}, getIpErr: ${getIpErr}`)
            res.status = 500;
            res.json({err: {getIpErr}});
            return
        }
        const {id} = tools.findCityId(city, countryCode)
        const {result, err} = await getWeatherInfo(id, req.query.type);
        if (err) {
            res.status = 500;
            res.json({err});
            return
        }
        res.status = 200;
        res.json(result)
    } catch (e) {
        res.status = 500;
        res.json({err: {e}})
    }
};

function getWeatherInfo(cityId) {
    return new Promise((resolve, reject) => {
        request({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${process.env.APPID}`
        }, (err, res, body) => {
            if (err) reject(err)
            resolve(JSON.parse(body))
        })
    }).then((body) => {
        return {result: body}
    }, (err) => {
        return {err: err}
    })
}
