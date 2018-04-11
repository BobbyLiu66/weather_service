/**
 * Created by bo liu on 2016/8/20.
 */
const bunyan = require('bunyan');
let log = bunyan.createLogger({name: 'config'});
let projectName = {
    "formal": "formal_weather_service",
    "test": "test_weather_service",
    "dev": "dev_weather_service"
};

function chooseEnv(model) {
    if (process.env.NODE_ENV === "formal") {
        return model.formal
    } else if (process.env.NODE_ENV === "test") {
        return model.test;
    } else {
        return model.dev;
    }
}

log.info("env:", process.env.NODE_ENV);
exports.chooseEnv = chooseEnv;
exports.projectName = chooseEnv(projectName);
