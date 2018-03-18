const { client } = require('./initCass');
const { fakerItemObject } = require('../fakerGens');

const query = 'INSERT INTO activity (id, address, created_at, image_url, latitude, longitude, name, num_reviews, ranking, rating, tags) VALUES (?,?,?,?,?,?,?,?,?,?,?)';

let generateTestObj = () => {
  var id = id || 2;
  return function()  {
    let obj = {
      id: id,
      address: '3123123 n. street',
      created_at: new Date(),
      image_url: 'https://image.com',
      latitude: 1.23123,
      longitude: 12.31,
      name: 'hi',
      num_reviews: 7,
      ranking: 10,
      rating: 4,
      tags: 'hi yo woah',      
    }
    id++;
    return obj;
  }
}
let itemGenerator = generateTestObj();

const insertTenRecords = () => {
  for (let i = 0; i < 10; i++) {
    client.execute(query, itemGenerator(), { prepare: true })
    .then(result => console.log(`Row updated: ${result}`))
     .catch(error => console.log(error));
  }
}

insertTenRecords();