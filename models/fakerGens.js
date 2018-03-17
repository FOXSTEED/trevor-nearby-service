const faker = require('faker');
const randomCoordinates = require('./randomCoordinates');
const {randomImages, randomImagesRaw } = require('./randomImages');


let fakerItemObject = () => {
  let coords = randomCoordinates.getRandomCoordinates();
  let options = ['hotel', 'attraction', 'restaurant'];
  var counter = counter || 0
  return function() {
    let item = {
      id:counter,
      type: options[faker.random.number({min: 0, max: 2})],
      name: faker.address.city(faker.random.number({ min: 0, max: 3 })),
      latitude: coords.latitude,
      longitude: coords.longitude,
      address: faker.address.streetAddress(true),
      rating: faker.random.number({ min: 0, max: 10 }),
      num_reviews: faker.random.number({ min: 0, max: 10 }),
      ranking: faker.random.number({ min: 0, max: 5 }),
      tags: faker.lorem.words(faker.random.number({ min: 0, max: 5 })), // stringified array
      image_url: randomImages(this.type)
    };
    counter++
    return item;

  }
};


let fakerItemRawPg = () => {
  let coords = randomCoordinates.getRandomCoordinates();  
  let randomTypeNum = faker.random.number({min: 0, max: 2});
  let item = {
    attraction_type: randomTypeNum + 1,
    name: faker.address.city(faker.random.number({ min: 0, max: 3 })),
    latitude: coords.latitude,
    longitude: coords.longitude,
    address: faker.address.streetAddress('###'),
    rating: faker.random.number({ min: 0, max: 10 }),
    num_reviews: faker.random.number({ min: 0, max: 7 }),
    ranking: faker.random.number({ min: 0, max: 5 }),
    tags: faker.lorem.words(faker.random.number({ min: 0, max: 3 })), // stringified array
    image_url: randomImagesRaw[randomTypeNum][faker.random.number({ min: 0, max: 5,})]
  };
  return item;
}
let fakerItemRawPgArray = () => {
  let randomTypeNum = faker.random.number({min: 0, max: 2});
  let item = [
randomTypeNum + 1,
    faker.address.city(faker.random.number({ min: 0, max: 3 })),

    coords.latitude,
    coords.longitude,
    faker.address.streetAddress('###'),
    faker.random.number({ min: 0, max: 10 }),
    faker.random.number({ min: 0, max: 10 }),
    faker.random.number({ min: 0, max: 5 }),
    faker.lorem.words(faker.random.number({ min: 0, max: 5 })), // stringified array
    randomImagesRaw[randomTypeNum][faker.random.number({ min: 0, max: 5,})],
    
  ];
  return item;
}


module.exports = {
  fakerItemObject, fakerItemRawPg, fakerItemRawPgArray
}