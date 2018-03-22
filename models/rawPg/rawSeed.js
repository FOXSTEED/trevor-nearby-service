const pgp = require('pg-promise')();

const helpers = pgp.helpers;

const {fakerItemRawPg, fakerItemRawPgArray} = require('../fakerGens.js');
require('dotenv').config();

const fakeAttraction = fakerItemRawPg(0);
const fakeHotel = fakerItemRawPg(1);
const fakeRestaurant = fakerItemRawPg(2);

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

const generateBulkFakeData = async(count) => {
  let tmp = [];
  for (let i = 0; i < count; i += 1) {
    await tmp.push(fakerItemRawPg());
  }
  return tmp;
};

const generateBulkFakeDataRest = async(count) => {
  let tmp = [];
  for (let i = 0; i < count; i += 1) {
    await tmp.push(fakeRestaurant());
  }
  return tmp;
};
const generateBulkFakeDataAttr = async(count) => {
  let tmp = [];
  for (let i = 0; i < count; i += 1) {
    await tmp.push(fakeAttraction());
  }
  return tmp;
};
const generateBulkFakeDataHot = async(count) => {
  let tmp = [];
  for (let i = 0; i < count; i += 1) {
    await tmp.push(fakeHotel());
  }
  return tmp;
};

const insertBulk = async(table) => {
  console.log(table);
  if (table === 'restaurants') {
    var data = await generateBulkFakeDataRest(10000);
  } else if (table === 'hotels') {
    var data = await generateBulkFakeDataHot(10000);
  } else {
    var data = await generateBulkFakeDataAttr(10000);
  }
  let helped = pgp
    .helpers
    .insert(data, [
    'attraction_id',
    'name',
    'latitude',
    'longitude',
    'address',
    'rating',
    'num_reviews',
    'ranking',
    'tags',
    'image_url'
  ], table)
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

async function hotelThreeMillionAsync() {
  console.time('seedH');
  for (let i = 0; i < 502; i++) {
    const x = insertBulk;
    console.time('10k')
    await x('hotels');
    console.timeEnd('10k');
  }
  console.timeEnd('seedH');
  process.exit();

}
async function attractionThreeMillionAsync() {
  console.time('seedA');
  for (let i = 0; i < 502; i++) {
    const x = insertBulk;
    console.time('10k')
    await x('attractions');
    console.timeEnd('10k');
  }
  console.timeEnd('seedA');
  process.exit();

}
async function restaurantThreeMillionAsync() {
  console.time('seedR');
  for (let i = 0; i < 502; i++) {
    const x = insertBulk;
    console.time('10k')
    await x('restaurants');
    console.timeEnd('10k');
  }
  console.timeEnd('seedR');
  process.exit();

}

async function nRecordsToInsertForTable(n, table) {
  console.time(`seed ${n}`);
  let loopTimes = Math.ceil((n + 10) / 10000);

  for (let i = 0; i < loopTimes; i += 1) {
    const x = insertBulk;
    console.time('10k');
    await x(table);
    console.timeEnd('10k');
  }

}
/*
millionAsync();
millionAsync();
*/
// hotelThreeMillionAsync();
// hotelThreeMillionAsync();
// restaurantThreeMillionAsync();
// restaurantThreeMillionAsync();
// attractionThreeMillionAsync();
// attractionThreeMillionAsync();
nRecordsToInsertForTable(460000, 'hotels');