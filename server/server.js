require('newrelic');
const morgan = require('morgan');
const express = require('express');
const React = require('react');
const path = require('path');
const { renderToString } = require('react-dom/server');
const { Restaurant, Hotel, Attraction } = require('../models/models.js');
const { getAttraction, getHotel, getRestaurant } = require('../models/rawPg/pgModels');
const cors = require('cors');
const template = require('./template');
const Nearby = require('../public/app-server.js')
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3003;

app.use(morgan('dev'))

app.use(cors());
// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../proxy')));
// app.use('/nearby/bundle.js', express.static('public/build/bundle.js'));

app.use('/:id', express.static('public/proxy/'));


/**
 *   
 * 1	attraction
 * 2 hotel
 * 3 restaurant
//  */

app.get('/nearby/restaurants/:id', (req, res) => {
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

app.get('/nearby/hotels/:id', (req, res) => {
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

app.get('/nearby/attractions/:id', (req, res) => {
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
