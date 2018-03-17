const MongoClient = require('mongodb').MongoClient;
const _ = require('ramda');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
require('dotenv').config();
const { fakerItemObject } = require('../fakerGens');

const url = process.env.MONGO_CN || 'mongodb://localhost:27017/nearby';

let item = fakerItemObject();

if (cluster.isMaster){
  console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} finished`);
  });
} else {
  console.time('concurrent insertion of 10million: ')
  seedMongo();
  console.log(`Worker ${process.pid} started`);
}

function seedMongo(){
  MongoClient.connect(url).then((client) => {
    

  console.log('connected to server');
  const db = client.db();
  const collection = db.collection('concurrent')
  
  var count = parseInt(10000000 / numCPUs);
  const size = 20000; 
  let seedFn = async () => {
    let docs = _.range(0, size).map((id) => {
      return { insertOne: { "document": item() }}
    });
    
    await collection.bulkWrite(docs, {ordered: false});
    count -= size;
    if (count > 0){
      seedFn();
    } else {
      console.timeEnd('concurrent insertion of 10million: ')
      client.close();
      process.exit();        
    }
  }
  
  seedFn();
});
};

