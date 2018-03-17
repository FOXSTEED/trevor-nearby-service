const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();
const { fakerItemObject } = require('../fakerGens');

const url = process.env.MONGO_CN || 'mongodb://localhost:27017/nearby';

let item = fakerItemObject();

MongoClient.connect(url, (err, client) => {
  
  console.log('connected to server');
  const db = client.db();

  let operation = insertHundredAsync;

  //  operation(db).then(() => {
  //   console.log('done~')
  //   console.timeEnd('insert1m')
  //   client.close();
  //  }).catch(error => {
  //    console.log(error);
  //    client.close();
  //  })
  let seedFn = async  (db) => {
    await operation(db);
    await operation(db);
    await operation(db);
    client.close();
    
  }

  seedFn(db);



});


const insertHundredAsync = async (db) => {
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


const counter = (db) => {
  const collection = db.collection('counter');
  collection.insert({_id: "item_id" , sequence_value : 0 })
    .then(() => {
      console.log('inserted ' + 1)
    })
    .catch(error => console.log(error));
}

const insertDocument = (db, item) => {
  const collection = db.collection('docs');

  collection.insertOne(item)
  
}

 const getValueForNextSequence = (db) => {
    //  db.collection('counter').findAndModify({
    // query: {_id: "item_id"},
    // update: { $inc: {sequence_value: 1}},
    // new:true})

    const collection = db.collection('counter');
    var sequenceDoc = collection.findOneAndReplace(
        {_id: "item_id" },
        {$inc:{sequence_value:1}},
        {
          upsert:true,
          returnOriginal: false
        });
    
     return sequenceDoc.then((data) => {
       return data.value.sequence_value
     }).catch(error => error)


 }



