const express = require('express');

const { Restaurant, Hotel, Attraction } = require('../models/models.js');

const app = express();

app.use('/:id', express.static('public/'));

app.get('/restaurants/:id', (req, res) => {
  Restaurant.findOne({ where: { restaurant_id: req.params.id } })
    .then(restaurant => restaurant.dataValues)
    .then((restaurant) => {
      res.send(restaurant);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

app.get('/hotels/:id', (req, res) => {
  Hotel.findOne({ where: { hotel_id: req.params.id } })
    .then(hotel => hotel.dataValues)
    .then((hotel) => {
      res.send(hotel);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

app.get('/attractions/:id', (req, res) => {
  Attraction.findOne({ where: { attraction_id: req.params.id } })
    .then(attraction => attraction.dataValues)
    .then((attraction) => {
      res.send(attraction);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send();
    });
});

app.listen(3003, () => {
  console.log('App listening on port 3003');
});
