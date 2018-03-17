const pgp = require('pg-promise')();
const helpers = pgp.helpers;
const { fakerItemRawPg, fakerItemRawPgArray } = require('../fakerGens.js');
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

const generateBulkFakeData = async (count) => {
  let tmp = [];
  for (let i = 0; i < count; i += 1) {
    await tmp.push(fakerItemRawPg());
  }
  return tmp;
}



const insertBulk = async (count) => {
  let data = await generateBulkFakeData(10000);
  let helped = pgp.helpers.insert(data, [
      'attraction_type',
      'name',
      'latitude',
      'longitude',
      'address',
      'rating',
      'num_reviews',
      'ranking',
      'tags',
      'image_url'
    ], 'nearby')
  
   return await db.none(helped);
}
async function millionAsync() {
  console.time('seed');
  for (let i = 0; i < 502; i++) {
    const x = insertBulk;
    console.time('10k')
   await x();
    console.timeEnd('10k');
  }
  console.timeEnd('seed');
  process.exit();


}


millionAsync();
millionAsync();
