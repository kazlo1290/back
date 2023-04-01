// modules
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');

const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected', `${conn.connection.host}`.yellow);
  } catch (err) {
    console.log('Error', err.toString().red, ' RETRYING...'.blue);
    process.exit(1);
  }
};

module.exports = { connectMongo };
