const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log('MongoDbOK: '.bgRed,`${conn.connection.host}`.yellow.underline);
    } catch (error) {
        console.log('MongoDbER: '.bgRed, err.toString().red, ' RETRYING...'.blue);
         process.exit(1)
    }
}

module.exports = connectDB