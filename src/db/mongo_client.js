const mongo_config = require('./mongo_config').mongodb;
const MongoClient = require('mongodb').MongoClient;
exports.mongo_client = MongoClient.connect(mongo_config.weather).then(
    function onFulfilled(db) {
        console.log("MONGO READY");
        return db;
    }
);