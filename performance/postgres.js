const {  getAttraction, getHotel, getRestaurant } = require('../models/rawPg/pgModels');
const faker = require('faker');

let random = () => faker.random.number({ min: 1, max: 9950000});

const queryNTimes = (n, query, label) => {
  console.time(`total ${n} queries for ${label}`);
  for (let i = 0; i < n; i += 1) {
    var id = random();
    query(id)
      .then()
      .catch(error => console.log(error));
  }
  console.timeEnd(`total ${n} queries for ${label}`);
}


queryNTimes(500, getAttraction, 'attraction');
queryNTimes(500, getHotel, 'hotel');
queryNTimes(500, getRestaurant, 'restaurant');