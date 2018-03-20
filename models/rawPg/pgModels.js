const pgp = require('pg-promise')();

const helpers = pgp.helpers;

require('dotenv').config();

const cn = process.env.PG_RAW_CN || 'postgres://localhost:5432/pg_raw';
const db = pgp(cn);

let queryBuilder = async (id, table) => {

  try {
    const activity = await db.any(`SELECT * FROM ${table} WHERE id = $1`, [id]);
    return activity[0];
  } catch (e) {
    // error
    console.log(`error caught retrieving ${id}: ${e}`);
    return e;
  }
}

let getAttraction = (id) => {
  let record = queryBuilder(id, 'attraction');
  return record;
}

let getHotel = (id) => {
  let record = queryBuilder(id, 'hotel');
  return record;
}

let getRestaurant =  (id) => {
  let record = queryBuilder(id, 'restaurant');
  return record;
}

module.exports = {
  getAttraction, getHotel, getRestaurant
}