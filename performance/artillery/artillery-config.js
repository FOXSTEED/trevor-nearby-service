const faker = require('faker');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));


const randomNum = (userContext, events, done) => {
  const id = faker.random.number({ min: 1, max: 9000000 });
  userContext.vars.id = id;
  return done();
};

const printNthousandRandomNumsToCsv = (n) => {
  for (let i = 0; i < n; i += 1) {
    let id = faker.random.number({ min: 1, max: 9000000 });
    console.log(id);
    if (i === 0) {
      fs.appendFileAsync('./payload.csv', `id\n${id},\n`)
        .then()
        .catch(error => console.log(error));
    }
    fs.appendFileAsync('./payload.csv', `${id},\n`)
      .then()
      .catch(error => console.log(error));
  }
  console.log('Done');
};
// printNthousandRandomNumsToCsv(5000)
module.exports = {
  randomNum,
};
