const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const url = process.env.MONGO_CN || 'mongodb://localhost:27017/nearbyMongo';

const openMongoConnection = () => {
    return MongoClient.connect(url);
    
}
const getRestaurant = (id) => {
  return openMongoConnection()
    .then((client) => {
      const db = client.db();
      const collection = db.collection('restaurant');
      return collection.find({ "id": id});
    })
    .catch((err) => {
      console.log(`error opening mongo connection ${err}`)
    })
  }


const getHotel = (client, id) => {
 
       const db = client.db();
       const collection = db.collection('hotel');
       return collection.findOne({ "id": id});
     
    
 }

 const getAttraction = (id) => {
  return openMongoConnection()
     .then((client) => {
       const db = client.db();
       const collection = db.collection('attraction');
       return collection.findOne({ "id": id});
     })
     .catch((err) => {
       console.log(`error opening mongo connection ${err}`)
     })
 }

 const getAttractionScratch = (id, db) => {
   console.log(db);

  const collection = db.collection('attraction');
  return collection.findOne({ "id": id});
 }

module.exports = {  getRestaurant, getAttractionScratch, getHotel }
