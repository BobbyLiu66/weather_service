'use strict';
const request = require('request');
// const weatherMongo = require('../persistance/mongo_weather');
const cityList = require('../../const/city.list.json')
const _ = require('lodash')

exports.getIpLocation = (ip) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: `http://ip-api.com/json/${ip}`,
        }, (err, res, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body))
            }
        })
    }).then(
        async (result) => {
            if (result.status === "success") {
                // weatherMongo.saveIpInfo(result);
                return {
                    countryCode: result.countryCode,
                    city: result.city
                }
            } else {
                return {
                    getIpErr: result
                }
            }
        }, (err) => {
            return {
                getIpErr: err
            }
        })
};

exports.findCityId = (cityName, countryCode) => {
    const cityListDict = _.groupBy(cityList, 'name')
    if (cityName in cityListDict) {
        return cityListDict[cityName].find(o => o.country === countryCode)
    }
}

