/**
 * Created by bo liu on 2016/8/20.
 */
const chooseEnv = require('./config').chooseEnv;

const mongodb = {
    test: {
        weather: "mongodb://bobby:bobbyliu@localhost:27017/weather",
    },
    formal: {
        weather: "mongodb://bobby:bobbyliu@localhost:27017/weather",
    },
    dev: {
        weather: "mongodb://bobby:bobbyliu@localhost:27017/weather",
    }
};

exports.mongodb = chooseEnv(mongodb);