const mysql = require('mysql');

const dbConn = mysql.createPool({
    connectionLimit: 10,
    waitForConnections: true,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    debug: false,
})

dbConn.getConnection(function (err) {
    if (err) {
        console.log('MysqlDbER: '.bgRed, err.toString().red, ' RETRYING...'.blue);
    } else {
        console.log('MysqlDbOK: '.bgRed + `${process.env.DB_NAME}`.yellow.underline);
    }
})

module.exports = dbConn;