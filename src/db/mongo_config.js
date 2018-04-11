/**
 * Created by bo liu on 2016/8/20.
 */
const chooseEnv = require('./config').chooseEnv;

const mongodb = {
    test: {
        weather: "mongodb://liubo:liubo4MongoDB@192.168.1.103:27017/premier",
    },
    formal: {
        weather: "mongodb://liubo:liubo4MongoDB@192.168.1.103:27017/premier",
    },
    dev: {
        weather: "mongodb://bobby:bobbyliu@localhost:27017/weather",
    }
};

exports.mongodb = chooseEnv(mongodb);