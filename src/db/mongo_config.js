const chooseEnv = require('./config').chooseEnv;

const mongodb = {
    test: 'mongodb://localhost:27017/chat',
    formal: 'mongodb://localhost:27017/chat',
    dev: 'mongodb://localhost:27017/chat'
};

exports.mongodb = chooseEnv(mongodb);
