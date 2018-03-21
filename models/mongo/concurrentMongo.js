const MongoClient = require('mongodb').MongoClient;
const _ = require('ramda');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
require('dotenv').config();
const { fakerItemObject } = require('../fakerGens');
//process.env.MONGO_CN || 
const url = 'mongodb://localhost:27017/nearbyMongoFix';

let restaurantItem = fakerItemObject('restaurant');
let hotelItem = fakerItemObject('hotel');
let attractionItem = fakerItemObject('attraction');
function forkWorkers(seeder) {

if (cluster.isMaster){
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs - 5; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} finished`);
  });
} else {
  console.time('concurrent insertion of 10million: ')
  seeder
  console.log(`Worker ${process.pid} started`);
}
}
forkWorkers(seedCollection('hotel'));
forkWorkers(seedCollection('attraction'));
forkWorkers(seedCollection('restaurant'));


function generateByName(name) {
  switch(name) {
    case 'hotel':
      return hotelItem();
          break;
    case 'attraction':
      return attractionItem();
          break;
    case 'restaurant':
        return restaurantItem();
        break;
    default: null;
  }
}
function seedCollection(name) {
  MongoClient.connect(url).then((client) => {
    console.log('connected to server');
    const db = client.db();
    const collection = db.collection(name);
    const size = 20000; 
    var count = 10000000;

    let seedFn = async () => {
      let docs = _.range(0, size).map((id) => {
        return { insertOne: { "document": generateByName(name) }}
      });

    console.time(`${name} 20k`)
    await collection.bulkWrite(docs, {ordered: false});
    count -= size;
    if (count > 0){
      console.timeEnd(`${name} 20k`)
      seedFn();
    } else {
      console.timeEnd('concurrent insertion of 10million: ')
      client.close();
      process.exit();        
    }
  }
    seedFn();
    });
} 

