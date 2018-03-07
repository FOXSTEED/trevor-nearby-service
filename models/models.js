const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/nearbyitems', { logging: false });

const Restaurant = sequelize.define('restaurant', {
  restaurant_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
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

const Hotel = sequelize.define('hotel', {
  hotel_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
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

const Attraction = sequelize.define('attraction', {
  attraction_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
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
  sequelize, Restaurant, Hotel, Attraction
};
