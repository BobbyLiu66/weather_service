const path = require('path');
const fs = require('fs');
const mongo_client = require('../db/mongo_client').mongo_client;
const _ = require('lodash');

exports.insert_city_list = async () => {
    let client = await mongo_client;
    const file_path = path.join(__dirname, 'city.list.json');
    let data = JSON.parse(fs.readFileSync(file_path).toString());
    _.forEach(data, (value) => {
        let obj = {
            name: value.name,
            country: value.country,
            _id: value.id,
            coord: value.coord
        };
        client.db('weather').collection('city_list').insertOne(obj)
    });
};

exports.getCityId = async (name, country) => {
    let client = await mongo_client;
    let regExp = new RegExp("^.*" + name + ".*$");
    let query = {
        name: regExp,
        country: country
    };
    return await client.db('weather').collection('city_list').findOne(query).catch((err) => {
        return {getCityErr: err}
    })
};

exports.saveIpInfo = async (ipInfo) => {
    let client = await mongo_client;
    ipInfo._id = ipInfo.query;
    delete ipInfo.query;
    delete ipInfo.status;
    client.db('weather').collection('ip_info').updateOne(ipInfo, {
        $currentDate: {
            lastModified: true
        }
    }, {"upsert": true})
};
