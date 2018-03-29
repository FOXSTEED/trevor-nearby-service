const pgp = require('pg-promise')();


require('dotenv').config();

const cn = process.env.PG_RAW_CN || 'postgres://localhost:5432/nearby_prod';
const db = pgp(cn);

const queryBuilder = async (id, table) => {
  try {
    const activity = await db.any(`SELECT * FROM ${table} WHERE attraction_id = $1`, [id]);
    return activity[0];
  } catch (e) {
    // error
    console.log(`error caught retrieving ${id}: ${e}`);
    return e;
  }
};

const getAttraction = (id) => {
  const record = queryBuilder(id, 'attractions');
  return record;
};

const getHotel = (id) => {
  const record = queryBuilder(id, 'hotels');
  return record;
};

const getRestaurant = (id) => {
  const record = queryBuilder(id, 'restaurants');
  return record;
};

module.exports = {
  getAttraction, getHotel, getRestaurant,
};

