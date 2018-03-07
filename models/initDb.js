const Sequelize = require('sequelize');
const { Restaurant, Hotel, Attraction } = require('./models.js');

const DBHOST = process.env.DBHOST || 'localhost';
const DBPORT = process.env.DBPORT || 5432;
const DBNAME = process.env.DBNAME || 'nearbyitems';

const sequelize = new Sequelize(`postgres://${DBHOST}:${DBPORT}/${DBNAME}`, { logging: false });

let promises = [];

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.\n Initializing database...');

    promises.push(Restaurant.sync());
    promises.push(Hotel.sync());
    promises.push(Attraction.sync());
  })
  .then(async () => {
    await Promise.all(promises);
    console.log(`Created ${promises.length} tables at postgres://${DBHOST}:${DBPORT}/${DBNAME}`);
    sequelize.close();
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  })
  .finally(() => {
    process.exit();
  });
