const chooseEnv = require('./config').chooseEnv;

const mysql = {
    test: {
        weather: {
            host:'ec2-13-211-150-239.ap-southeast-2.compute.amazonaws.com',
            port:3306,
            user:'liubo_remote',
            password:'liubo3647',
            database:'weather',
        }
    },
    formal: {
        weather: {
            host:'ec2-13-211-150-239.ap-southeast-2.compute.amazonaws.com',
            port:3306,
            user:'liubo_remote',
            password:'liubo3647',
            database:'weather',
        }
    },
    dev: {
        weather: {
            host:'ec2-13-211-150-239.ap-southeast-2.compute.amazonaws.com',
            port:3306,
            user:'liubo_remote',
            password:'liubo3647',
            database:'weather',
        }
    }
};

exports.mysql = chooseEnv(mysql);

