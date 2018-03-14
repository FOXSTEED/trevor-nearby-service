const faker = require('faker');
const randomCoordinates = require('./randomCoordinates');
const randomImages = require('./randomImages');

const {
  sequelize, Restaurant, Hotel, Attraction
} = require('./models.js');

let randomItemAutoId = (type) => {
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


  return item;
};

let createBulkArray = (type, count) => {
  let tmp = [];
  for (let i = 0; i < count; i++) {
    tmp.push(randomItemAutoId(type))
  }
  return tmp;
}
async function insertBulkForModel(model, arr) {
  await model.bulkCreate(arr,{
    validate: false,
    hooks: false,
    logging: false,
    returning: false,
  });
}
let insertBulkRecords = () => {
  for (let i = 0; i < 20; i += 1) {
    let tmpArr = [];
    for (let j = 0; j < 50000; j += 1) {
      tmpArr.push(randomItemAutoId('hotel'));
    }
    Hotel.bulkCreate(tmpArr)
    .then(() => {
      console.log('Created records');
    })
    .catch(error => console.log(error))
    .finally(() => {
      sequelize.close();
    })
  } 
}

let createFiveHundredThousandRecords = (model, type) => {
  return Promise.all([
    insertBulkForModel(model, createBulkArray(type, 100000)),
    insertBulkForModel(model, createBulkArray(type, 100000)),
    insertBulkForModel(model, createBulkArray(type, 100000)),
    insertBulkForModel(model, createBulkArray(type, 100000)),
    insertBulkForModel(model, createBulkArray(type, 100000)),
  ]);
}

let promiseAllBulkCreate = () => {
  Promise.all([
    insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
    insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
    insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
    insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
    insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
  ]).then(() => {
    console.log(`Inserted a milly `)
    Promise.all([
      insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
      insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
      insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
      insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
      insertBulkForModel(Hotel, createBulkArray('hotel', 100000)),
    ]).then(() => {
      sequelize.close();
      process.exit();
    }).catch(error => console.log(error))

    
  })
  .catch(error => {
    console.log(error)
    sequelize.close();
    process.exit();
  });
}

let createTwoMillionRecords = (model, type) => {
  createFiveHundredThousandRecords(model, type)
    .then(() => {
      console.log('Inserted 500k');
      createFiveHundredThousandRecords(model, type)
        .then(() => {
          console.log('Inserted 500k');
          createFiveHundredThousandRecords(model, type)
            .then(() => {
              console.log('Inserted 500k');
              createFiveHundredThousandRecords(model, type)
                .then(() => {
                  console.log('Inserted 500k');
                  sequelize.close();
                  process.exit();
              }).catch(error => console.log(error));
            }).catch(error => console.log(error));
          }).catch(error => console.log(error));
      }).catch(error => console.log(error));
};

createTwoMillionRecords(Hotel, 'hotel');
createTwoMillionRecords(Hotel, 'hotel');
createTwoMillionRecords(Hotel, 'hotel');
createTwoMillionRecords(Hotel, 'hotel');

// for (let i = 0; i < 5; i += 1) {
//   insertBulkForModel(Hotel, createBulkArray('hotel', 100000))
//   .then(() => {
//     console.log(`Inserted 100k of ${i + 1}/5`)
//     sequelize.close();
//   })
// }
