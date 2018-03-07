const faker = require('faker');
const randomCoordinates = require('./randomCoordinates');
const randomImages = require('./randomImages');
const { Restaurant, Hotel, Attraction } = require('./models.js');

let randomItem = (type, id) => {
  let coords = randomCoordinates.getRandomCoordinates();

  let item = {
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

  item[`${type}_id`] = id;

  return item;
};

for (let i = 0; i < 200; i += 1) {
  let hotel = randomItem('hotel', i);
  Hotel.create(hotel);

  let restaurant = randomItem('restaurant', i);
  Restaurant.create(restaurant);

  let attraction = randomItem('attraction', i);
  Attraction.create(attraction);
}
