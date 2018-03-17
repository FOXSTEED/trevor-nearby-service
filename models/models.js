const Sequelize = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://127.0.0.1:5432/nearbytrevor';
const sequelize = new Sequelize(DATABASE_URL, { logging: false });


const Activity = sequelize.define('activity', {
  type: Sequelize.STRING,
  name: Sequelize.STRING,
  latitude: Sequelize.DOUBLE,
  longitude: Sequelize.DOUBLE,
  address: Sequelize.STRING,
  rating: Sequelize.INTEGER,
  num_reviews: Sequelize.INTEGER,
  ranking: Sequelize.INTEGER,
  tags: Sequelize.STRING, // stringified array
  image_url: Sequelize.STRING
});


module.exports = {
  sequelize, Activity
};
