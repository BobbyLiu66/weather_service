'use strict';
const weatherMongo = require('../persistance/mongo_weather');
const tools = require('../util/tools');
const request = require('request');
const log = require('bunyan');

//TODO call getIpLocation twice ?
exports.currentWeatherDate = async (ip) => {
        let {city,countryCode} = await tools.getIpLocation(ip).catch((err)=>{log.ERROR(err)});
        let {_id} = await weatherMongo.getCityId(city, countryCode).catch((err)=>{log.ERROR(err)});
        let result = await getWeatherInfo(_id).catch((e)=>{log.ERROR(e)});
        console.log(result)
};

function getWeatherInfo(cityId){
    return new Promise((resolve, reject)=>{
        request({
            method:"GET",
            url:`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&APPID=676fb922b841e438eab020fcd29eaba6`
        },(err,res,body)=>{
            if(err)reject(err);
            resolve(JSON.parse(body))
        })
    }).then((body)=>{console.log(body); return body},(err)=>{return err})
}