const MongoClient = require('mongodb').MongoClient;
const { getRestaurant, getAttraction, getHotel, getAttractionScratch } = require('../models/mongo/mongoModels');
const faker = require('faker');

const url = 'mongodb://localhost:27017/nearbyMongoFix';
let random = () => faker.random.number({ min: 1, max: 9950000});


// mongoUtil.connectToServer((err, client) => {
//   console.log('connected');
//   db = client.db();


// })



const queryNTimes = (n, query, label) => {
  console.time(`total ${n} queries for ${label}`);

  for (let i = 0; i < n; i += 1) {
    var id = random();

     query(id)
      .then((data) => console.log(data))
      .catch(error => console.log(error));
  }
  console.timeEnd(`total ${n} queries for ${label}`);


}


let attractions =   (n) => {
  MongoClient.connect(url)
    .then(  (client) => {
      console.log('connected');
      let db = client.db();
      let collection = db.collection('attraction');
       function getItem(id) {

         return  collection.findOne({"id":id});                
        }
        for (let i = 0; i < n; i += 1) {
          var id = random();
          var item = getItem;
        item(id).then((val) => {
          if (val) {
            console.log(val)
            
          }
        }).catch(error => {
          console.log(error)
        });

        
      }
      client.close();
      console.timeEnd(`total query time`);

      })
}
let hotels =  (n) => {
   queryNTimes(n, getHotel(), 'mongo-hotel');
  process.exit();
}
let restaurants =  (n) => {
   queryNTimes(n, getRestaurant(), 'mongo-restaurant');
  process.exit();
}

let attractionTest = async (id) => {
  MongoClient.connect(url)
    .then((client) => {
      var db = client.db();
      var collection = db.collection('attraction');
      console.log(collection.find({id}))
    })
    .catch(error => console.log(error));
  }
  



console.time(`total query time`);
attractions(process.argv[2]);
// console.log(process.argv);
// attractions(process.argv[2]).then(data => console.log)
// hotels(process.argv[2]);
// restaurants(process.argv[2]);

// queryNTimes(process.argv[2], getAttraction, 'attraction');
// queryNTimes(process.argv[2], getHotel, 'hotel');
// queryNTimes(process.argv[2], getRestaurant, 'restaurant');
