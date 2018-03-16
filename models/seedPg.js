const pgp = require('pg-promise')();

const connection = 'postgres://127.0.0.1:5432/nearbyitems';
const db = pgp(connection);

db.none(
  'INSERT INTO hotels(name, latitude, longitude, address, rating, num_reviews, ranking, tags, image_url, createdat, updatedAt) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', 
['Test', 37.239823, -122.24424, '1332 house road', 9, 1, 3, 'trevor', 'https://image.url', '2018-03-14 19:22:10.181-07', '2018-03-14 19:22:10.181-07']).then(data => {
  console.log(`Inserted ${data.id}`)
})
.catch(error => {
  console.log(error)
});