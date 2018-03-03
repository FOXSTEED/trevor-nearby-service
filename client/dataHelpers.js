import axios from 'axios';

const getItem = (type, id) => (
  new Promise((resolve) => {
    axios.get(`/${type}/${id}`)
      .then((item) => {
        resolve(item.data);
      });
  })
);

const getFourIds = id => (
  [(id + 1) % 200, (id + 2) % 200, (id + 3) % 200, (id + 4) % 200]
);

const getNearest = (type, id) => {
  let nearest = [];
  let nearestIds = getFourIds(id);

  nearestIds.forEach((nearestId) => {
    nearest.push(getItem(type, nearestId));
  });

  return Promise.all(nearest);
};


export default { getItem, getNearest };
