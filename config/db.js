const mongoose = require('mongoose');
const mysql = require('mysql');

if (process.env.DB_CHOOSE == 'MONGODB') {
    const connectDB = async () => {
        try {
            const conn = await mongoose.connect(process.env.MONGO_URI)

            console.log('MongoDbOK: '.bgRed, `${conn.connection.host}`.yellow.underline);
        } catch (err) {
            console.log('MongoDbER: '.bgRed, err.toString().red, ' RETRYING...'.blue);
            process.exit(1)
        }
    }

    module.exports = connectDB;

} else 
if (process.env.DB_CHOOSE == 'MYSQL') {
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
}