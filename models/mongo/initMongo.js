const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const { fakerItemObject } = require('../fakerGens');

const url = process.env.MONGO_CN || 'mongodb://localhost:27017/nearby';

let item = fakerItemObject();

MongoClient.connect(url, (err, client) => {
  
  console.log('connected to server');
  const db = client.db();

  let operation = insertOneMillionDocuments;

  let seedFn = async  (db) => {
    await operation(db);
    await operation(db);
    await operation(db);
    await operation(db);
    await operation(db);
    await operation(db);
    await operation(db);
    await operation(db);
    await operation(db);
    await operation(db);
    client.close();    
  }
  seedFn(db);
});


const insertOneMillionDocuments = async (db) => {
  let promises = [];
  const collection = db.collection('docs');
  console.time('1m')

  for (let i = 0; i < 1000000; i += 1) {
    promises.push(
      { insertOne: { "document": item() }});
    }
    await collection.bulkWrite(promises);
    console.timeEnd('1m');
   }




const insertDocument = (db, item) => {
  const collection = db.collection('docs');
  collection.insertOne(item);  
}



