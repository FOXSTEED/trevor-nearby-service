import axios from 'axios';

const getAttraction = async id => axios.get(`/attractions/${id}`);

const getFourIds = id => (
  [(id + 1) % 200, (id + 2) % 200, (id + 3) % 200, (id + 4) % 200]
);

const getNearest = async (type, id) => {
  let nearest = [];
  let nearestIds = getFourIds(id);

  nearestIds.forEach(async (nearestId) => {
    nearest.push((await axios.get(`/${type}/${nearestId}`)).data);
  });

  return nearestIds;
};


export default { getAttraction, getNearest };
