require('newrelic');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const { getAttraction, getHotel, getRestaurant } = require('../models/rawPg/pgModels');
const cors = require('cors');
const bluebird = require('bluebird');
const redis = require('redis');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 8000;

const client = redis.createClient();


app.use(morgan('tiny'));

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));


app.use('/:id', express.static('public/'));

client.on('error', err => console.log(err));

/**
 *
 * 1 attraction
 * 2 hotel
 * 3 restaurant
//  */

app.get('/nearby/restaurants/:id', (req, res) => {
  const restaurantId = req.params.id;

  client.get(restaurantId, (err, result) => {
    if (result) {
      console.log('found in cache');
      res.send(result);
    } else {
      console.log('not found in cache, making request');
      getRestaurant(req.params.id)
        .then((data) => {
          client.setex(restaurantId, 3600, JSON.stringify(data));
          res.send(data);
        })
        .catch((error) => {
          console.log(error);
          res.status(400).send();
        });
    }
  });
});


app.get('/nearby/hotels/:id', (req, res) => {
  const hotelId = req.params.id;

  client.get(hotelId, (error, result) => {
    if (result) {
      console.log('found in cache');
      res.send(result);
    } else {
      console.log('not found in cache, performing lookup');
      getHotel(req.params.id)
        .then((data) => {
          client.setex(hotelId, 3600, JSON.stringify(data));
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(400).send();
        });
    }
  });
});

app.get('/nearby/attractions/:id', (req, res) => {
  const attractionId = req.params.id;
  client.get(attractionId, (error, result) => {
    if (result) {
      console.log('found in cache');
      res.send(result);
    } else {
      console.log('not found in cache, performing lookup');
      getAttraction(req.params.id)
        .then((data) => {
          client.setex(attractionId, 3600, JSON.stringify(data));
          res.send(data);
        })
        .catch((err) => {
          console.log(err);
          res.status(400).send();
        });
    }
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
