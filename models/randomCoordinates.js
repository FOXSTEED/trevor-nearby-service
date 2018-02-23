const LOCATIONS = {

  SANFRANCISCO : {
    min_latitude: 37712852, // 37.712852
    min_longitude: -122507387, // -122.507387
    max_latitude: 37807562, // 37.807562
    max_longitude: -122390252 // -122.390252
  }

}

let randomCity = () => {
  return LOCATIONS.SANFRANCISCO; //todo: randomize this
}

let randomLatitude = (city = null) => {
  if(!city) {
    city = randomCity();
  }

  return Math.floor( Math.random() * (city.max_latitude - city.min_latitude) + city.min_latitude) / 1000000;
};

let randomLongitude = (city = null) => {
  if(!city) {
    city = randomCity();
  }

  return Math.floor( Math.random() * (city.max_longitude - city.min_longitude) + city.min_longitude) / 1000000;
};

console.log(randomLatitude());
console.log(randomLongitude());