const pgp = require('pg-promise')();
const { fakerItemRawP, fakerItemRawPgArray } = require('../fakerGens.js');
require('dotenv').config();

const cn = process.env.PG_RAW_CN || 'postgres://localhost:5432/pg_raw';
const db = pgp(cn);


let initAttractionTypeTable = () => {
  let options = ['hotel', 'attraction', 'restaurant'];
  for (let i = 0; i < options.length; i++) {
    db
      .none('INSERT INTO attractiontype(name) VALUES($1)', options[i])
      .then(() => {
        console.log(`Inserted ${options[i]}`);
      })
      .catch(error => {
        console.log(error);
      })

  }
}



let insertCountRandom = (count) => {
  let x = 0;
  console.time('seed')
  while (x < count) {
  let item = fakerItemRawPgArray();
  db
    .none('INSERT INTO nearby(attraction_type, name, latitude, longitude, address, rating, num_reviews, ranking, tags, image_url, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', item)
    .catch(error => console.log(`error inserting ${item} with: ${error}`));
    x += 1;
  }
  console.timeEnd('seed');
}

// initAttractionTypeTable();


insertCountRandom(1000000);

