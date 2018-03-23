const faker = require('faker');

let randomNum = (userContext, events, done) =>{
  const id = faker.random.number({ min: 1, max: 74838749 })
  userContext.vars.id = id;
  return done();
} 

module.exports = {
  randomNum
}