'use strict';
const weatherMongo = require('../persistance/mongo_weather');
const tools = require('../util/tools');
const request = require('request');

exports.currentWeatherDate = async (req, res, ip) => {
    try {
        // const {city, countryCode, getIpErr} = await tools.getIpLocation(ip);
        // if (getIpErr) {
        //     res.status = 500;
        //     res.json({err: {getIpErr}});
        //     return
        // }
        // let {_id, getCityErr} = await weatherMongo.getCityId(city, countryCode);
        // console.log("_id", _id)
        const _id = '7910036'
        // if (getCityErr) {
        //     res.status = 500;
        //     res.json({err: {getCityErr}});
        //     return
        // }
        console.log(_id)
        let {result, err} = await getWeatherInfo(_id,req.query.type);
        if (err) {
            res.status = 500;
            res.json({err});
            return
        }
        res.status = 200;
        res.json(result)
    }catch (e) {
        res.status = 500;
        res.json({err:{e}})
    }
};

function getWeatherInfo(cityId,type) {
    return new Promise((resolve, reject) => {
        request({
            method: "GET",
            url: `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=676fb922b841e438eab020fcd29eaba6`
        }, (err, res, body) => {
            if (err) {
                console.error(err)
                reject(err)
            };
            resolve(JSON.parse(body))
        })
    }).then((body) => {
        return {result: body}
    }, (err) => {
        return {err: err}
    })
}
