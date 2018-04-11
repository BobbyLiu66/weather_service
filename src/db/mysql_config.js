const chooseEnv = require('./config').chooseEnv;
const CONFIG = require('../../configuration');

const mysql = {
    test: CONFIG.MYSQLTEST,
    formal: CONFIG.MYSQLFORMAL,
    dev: CONFIG.MONGODBDEV
};

exports.mysql = chooseEnv(mysql);

