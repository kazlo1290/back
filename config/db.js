const mongoose = require('mongoose');
const mysql = require('mysql');
// const Data = require('../mysql/query');

// MongoDB
if (process.env.DB_CHOOSE == 'MONGODB') {
    const connectMongo = async () => {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI)

            console.log('MongoDbOK: '.bgRed, `${conn.connection.host}`.yellow);
        } catch (err) {
            console.log('MongoDbER: '.bgRed, err.toString().red, ' RETRYING...'.blue);
            process.exit(1)
        }
    }

    module.exports = connectMongo;

} 

// MysqlDB
else if (process.env.DB_CHOOSE == 'MYSQL') {
    // Connection Data
    const connectMysql = mysql.createPool({
        connectionLimit: 10,
        waitForConnections: true,
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        debug: false,
    })

    // Connect
    connectMysql.getConnection(function (err) {
        if (err) {
            console.log('MysqlDbER: '.bgRed, err.toString().red, ' RETRYING...'.blue);
        } 
        else {
            // // Create Tables
            // connectMysql.query(DataInsert, Data, function (err, result) {
            //     if(err){
            //         console.log('Query: '.bgRed + 'not working'.yellow);
            //         console.log('Error: '.bgRed + err);
            //     } else {
            //         console.log('Query: '.bgRed + 'worked'.yellow);
            //         console.log('Result: '.bgRed + JSON.stringify(result).yellow);
            //     }
            // })
        console.log('MysqlDbOK: '.bgRed + `${process.env.DB_NAME}`.yellow);
        }
    })

    module.exports = connectMysql;
}