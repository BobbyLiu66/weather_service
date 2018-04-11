'use strict';
const request = require('request');
const weatherMysql = require('../persistance/mysql_weather');

exports.arrayToObj = (keys, values) => {
    let result = {};
    for (let i = 0; i < keys.length; i++) {
        if (values) {
            result[keys[i]] = values[i];
        } else {
            result[keys[i][0]] = keys[i][1];
        }
    }
    return result;
};

exports.getIpLocation = (ip) => {
    return new Promise((resolve, reject) => {
        request({
            method: 'GET',
            url: `http://ip-api.com/json/${ip}`,
        }, (err, res, body) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(body))
            }
        })
    }).then(
        (result) => {
            if(result.status === "success"){
                weatherMysql.saveIpInfo(result);
                return {
                    countryCode: result.countryCode,
                    city: result.city
                }
            }
            else {
                return {
                    getIpErr:'something wrong, try again later'
                }
            }

        },(err)=>{return {
            getIpErr:err
        }})
};

