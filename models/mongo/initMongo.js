const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const faker = require('faker');
const randomCoordinates = require('../randomCoordinates');
const randomImages = require('../randomImages');

let randomItemAutoId = (type) => {
  let coords = randomCoordinates.getRandomCoordinates();

  let item = {
    type: type,
    name: faker.address.city(faker.random.number({ min: 0, max: 3 })),
    latitude: coords.latitude,
    longitude: coords.longitude,
    address: faker.address.streetAddress(true),
    rating: faker.random.number({ min: 0, max: 10 }),
    num_reviews: faker.random.number({ min: 0, max: 10 }),
    ranking: faker.random.number({ min: 0, max: 5 }),
    tags: faker.lorem.words(faker.random.number({ min: 0, max: 5 })), // stringified array
    image_url: randomImages(type)
  };


  return item;
};



mongoose.connect('mongodb://localhost/nearby').then(console.log('connected')).catch(error => console.log(error));







const nearbySchema = new Schema({
    type: String,
    name: String,
    latitude: Schema.Types.Number,
    longitude: Schema.Types.Number,
    address: String,
    rating: Number,
    num_reviews: Number,
    ranking: Number,
    tags:  String,// stringified array
    image_url: String,
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now}
  });



  let Nearby = mongoose.model('Nearby', nearbySchema);
  Nearby.create(randomItemAutoId('hotel')).then(data => {
    mongoose.disconnect();
    console.log(data)
  }).catch(error => console.log(error));

