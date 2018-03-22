const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.MONGO_CN || 'mongodb://localhost:27017/nearbyMongo'
;

var _db;

module.exports = {
  connectToServer: () => {
    MongoClient.connect(url)
  },

  getDb: () => {
    console.log(_db);
    return _db;
  }
}