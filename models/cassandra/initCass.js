const cassandra = require('cassandra-driver');

require('dotenv').config();


const client = new cassandra.Client({
  contactPoints: [process.env.CON_POINT],
  keyspace: process.env.KEYSPACE
});


client.execute(`CREATE KEYSPACE IF NOT EXISTS nearbytrevor
WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 3};`)
.then(() => 
client.execute(`CREATE TABLE IF NOT EXISTS nearbytrevor.activity 
(
    id int PRIMARY KEY,
    name text,
    latitude double,
    longitude double,
    address text,
    rating int,
    num_reviews int,
    ranking int,
    tags text,
    image_url text,
    created_at timestamp
);`, (err, result) => {
  console.log(err, result);
}));

module.exports = {
  client
}
