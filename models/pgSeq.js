const faker = require('faker');
const randomCoordinates = require('./randomCoordinates');
const randomImages = require('./randomImages');
const {  sequelize, Activity } = require('./models.js');

let randomItemAutoId = () => {
  let coords = randomCoordinates.getRandomCoordinates();

  let options = ['hotel', 'attraction', 'restaurant'];
  let item = {
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
  return item;
};

const time = new Date().getTime();
console.log(`Seeding started: ${new Date().toLocaleTimeString()}`);
// 10 mil by three, divide that by 50k to see how much loop for each
 
// do this 66 times of 50k randomitemautoid
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function seedDb() {

    for (let j = 0; j < 201; j++) {
      let tmp = [];
      for (let x = 0; x < 50000; x++) {
        tmp.push(randomItemAutoId());
      }
      try {
        const insert = insertBulkForModel(tmp);
        await insert;
      } catch (error) {
        return error;
      }
    }

  console.log('done in ', (((new Date().getTime() - time) / 1000 ) / 60) + ' minutes');
  sequelize.close();
}

async function insertBulkForModel(arr) {
  await Activity.bulkCreate(arr,{
    validate: false,
    hooks: false,
    logging: false,
    returning: false,

  });
  await Activity.query.bulkInsert('activities',arr)
}
async function bulk() {

    let x = seedDb();
    await x;
  
}
bulk();