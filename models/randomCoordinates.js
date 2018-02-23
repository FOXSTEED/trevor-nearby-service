const LOCATIONS = {

  SANFRANCISCO : {
    min_latitude: 37712852, // 37.712852
    min_longitude: -122507387, // -122.507387
    max_latitude: 37807562, // 37.807562
    max_longitude: -122390252 // -122.390252
  },

  NEWYORK : {
    min_latitude: 40706023,
    min_longitude: -74011928,
    max_latitude: 40757108,
    max_longitude: -73970028
  },

  HONOLULU : {
    min_latitude: 21280092,
    min_longitude: -157888494,
    max_latitude: 21321326,
    max_longitude: -157809204
  },

  LONDON : {
    min_latitude: 51434368,
    min_longitude:  -207905,
    max_latitude: 51619049,
    max_longitude: -32683
  }
}

let randomCity = () => {
  let cities = Object.keys(LOCATIONS);
  let randomIndex = Math.floor(Math.random() * cities.length);
  return LOCATIONS[cities[randomIndex]];
}

let getRandomCoordinates = (city = null) => {
  if(!city) {
    city = randomCity();
  }

  let lat =  Math.floor( Math.random() * (city.max_latitude - city.min_latitude) + city.min_latitude) / 1000000;
  let long = Math.floor( Math.random() * (city.max_longitude - city.min_longitude) + city.min_longitude) / 1000000;

  return {latitude: lat, longitude: long};
};

exports.randomCity = randomCity;
exports.getRandomCoordinates = getRandomCoordinates;