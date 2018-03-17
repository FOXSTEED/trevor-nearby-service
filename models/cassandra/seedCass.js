const { client } = require('./initCass');
const { fakerItemObject } = require('../fakerGens');
let itemGenerator = fakerItemObject();

const query = 'INSERT INTO activity (id, name, latitude, longitude, address, rating, num_reviews, ranking, tags, image_url, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
const insertTenRecords = () => {
  for (let i = 0; i < 10; i++) {
    client.execute(query, itemGenerator(), { prepare: true })
     .then(result => console.log(`Row updated: ${result}`))
     .catch(error => console.log(error));
  }
}

insertTenRecords();