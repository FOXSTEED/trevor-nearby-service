const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://localhost:5432/testdb');
const Models = require('./models.js')

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .then(() => {
    Models.Restaraunt.sync();
  })
  .then(() => {
    Models.Hotel.sync();
  })
  .then(() => {
    Models.Attraction.sync();
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });