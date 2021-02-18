const chooseEnv = require('./config').chooseEnv;


const mysql = {
    test: 'mongodb://localhost:27017/chat',
    formal: 'mongodb://localhost:27017/chat',
    dev: 'mongodb://localhost:27017/chat'
};

exports.mysql = chooseEnv(mysql);

