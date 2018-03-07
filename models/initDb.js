const {
  sequelize, Hotel, Restaurant, Attraction
} = require('./models.js');

let promises = [];

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n\nInitializing database...');

    promises.push(Restaurant.sync());
    promises.push(Hotel.sync());
    promises.push(Attraction.sync());
  })
  .then(async () => {
    await Promise.all(promises);
    console.log(`Created ${promises.length} tables.`);
    sequelize.close();
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  })
  .finally(() => {
    process.exit();
  });
