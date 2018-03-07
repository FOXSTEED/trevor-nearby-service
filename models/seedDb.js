const faker = require('faker');
const randomCoordinates = require('./randomCoordinates');
const randomImages = require('./randomImages');
const {
  sequelize, Restaurant, Hotel, Attraction
} = require('./models.js');

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

let promises = {
  hotels: [],
  attractions: [],
  restaurants: []
};

let counters = {
  hotel: 0,
  attraction: 0,
  restaurant: 0
};

let rejections = {
  hotel: 0,
  attraction: 0,
  restaurant: 0
};

let insertItem = (type, Model, id) => {
  let item = Model.build(randomItem(type, id));

  return item.save()
    .then(() => {
      counters[type] += 1;
    })
    .catch(() => {
      rejections[type] += 1;
    });
};

console.log('Seeding database...');

for (let i = 0; i < 200; i += 1) {
  promises.hotels.push(insertItem('hotel', Hotel, i));
  promises.restaurants.push(insertItem('restaurant', Restaurant, i));
  promises.attractions.push(insertItem('attraction', Attraction, i));
}

let allHotels = Promise.all(promises.hotels)
  .then(() => {
    console.log('\nHotels:');

    if (counters.hotel > 0) {
      console.log(`Added ${counters.hotel} items.`);
    }
    if (rejections.hotel > 0) {
      console.log(`Rejected ${rejections.hotel} inserts`);
    }
  })
  .catch((err) => {
    console.log(err);
  });

let allRestaurants = Promise.all(promises.restaurants)
  .then(() => {
    console.log('\nRestaurants:');
    console.log(`Added ${counters.restaurant} items.`);

    if (counters.restaurant > 0) {
      console.log(`Added ${counters.restaurant} items.`);
    }
    if (rejections.restaurant > 0) {
      console.log(`Rejected ${rejections.restaurant} inserts.`);
    }
  })
  .catch((err) => {
    console.log(err);
  });

let allAttractions = Promise.all(promises.attractions)
  .then(() => {
    console.log('\nAttractions:');
    console.log(`Added ${counters.attraction} items.`);

    if (counters.attraction > 0) {
      console.log(`Added ${counters.attraction} items.`);
    }
    if (rejections.attraction > 0) {
      console.log(`Rejected ${rejections.attraction} inserts.`);
    }
  })
  .catch((err) => {
    console.log(err);
  });

Promise.all([allHotels, allRestaurants, allAttractions])
  .then(() => {
    sequelize.close();
    process.exit();
  })
  .catch(() => {
    process.exit();
  });
