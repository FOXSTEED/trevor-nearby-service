require('newrelic');
const express = require('express');
const { Restaurant, Hotel, Attraction } = require('../models/models.js');
const { getAttraction, getHotel, getRestaurant } = require('../models/rawPg/pgModels');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(cors());

app.use('/bundle.js', express.static('public/build/bundle.js'));

app.use('/:id', express.static('public/'));


/**
 *   
 * 1	attraction
 * 2 hotel
 * 3 restaurant
 */

app.get('/restaurants/:id', (req, res) => {
  if (req.params.id) {
    getRestaurant(req.params.id)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      })    
  }
});

app.get('/hotels/:id', (req, res) => {
  if (req.params.id) {
    getHotel(req.params.id)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      })    
  }
});

app.get('/attractions/:id', (req, res) => {
  if (req.params.id) {
    getAttraction(req.params.id)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      })    
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
