const mysql = require('mysql');
const mysql_config = require('./mysql_config').mysql;

let state = {
    pool: null
};

exports.mysql_client = () => {
    if(state.pool === null) {
        state.pool = mysql.createPool(mysql_config.weather);
        console.log("MYSQL READY");
    }
    return state.pool
};

// exports.mysql_client = (() => {
//     if(state.pool === null) {
//         state.pool = mysql.createPool(mysql_config.weather);
//     }
//     console.log("MYSQL READY");
//     return state.pool
// })();