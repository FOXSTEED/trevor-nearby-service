require('newrelic');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const { getAttraction, getHotel, getRestaurant } = require('../models/rawPg/pgModels');
const cors = require('cors');

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3003;

app.use(morgan('dev'));

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));


app.use('/:id', express.static('public/'));


/**
 *
 * 1 attraction
 * 2 hotel
 * 3 restaurant
//  */

app.get('/nearby/restaurants/:id', (req, res) => {
  if (req.params.id) {
    getRestaurant(req.params.id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  }
});

app.get('/nearby/hotels/:id', (req, res) => {
  if (req.params.id) {
    getHotel(req.params.id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  }
});

app.get('/nearby/attractions/:id', (req, res) => {
  if (req.params.id) {
    getAttraction(req.params.id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send();
      });
  }
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
