const {  getAttraction, getHotel, getRestaurant } = require('../models/rawPg/pgModels');
const faker = require('faker');
const Table = require('cli-table');
const ProgressBar = require('ascii-progress');

let random = () => faker.random.number({ min: 1, max: 9950000});

var table = new Table({
  head: ['Table', 'Query Count', 'Time (seconds)', 'Time (ms)']
, colWidths: [20, 20, 20, 20]
});

let barColors = {
  'attractions': '.red',
  'restaurants': '.white',
  'hotels': '.blue'
};

const queryNTimes = async (n, query, label) => {

  let row = [label, n, 0, 0];

  var bar = new ProgressBar({
    schema: `:bar${barColors[label]} :percent.green [ SELECT * FROM ${label}... ] `,
    total: n - 1 > 0 ? n - 1 : n - 0
  });
  for (let i = 0; i < n; i += 1) {
    var id = random();

    var start = Date.now();
    let x = query(id);
    await x;
    var end = Date.now();
    var totalTime = parseFloat(end - start);
    row[2] += ((totalTime) / 1000);
    row[3] += totalTime;
    bar.tick(i + 1, label);
    if (n - i === 1) {
      bar.clear();
      bar.clean = true;
    }


    
  }
  row[2] = row[2].toFixed(2);
  row[3] = row[3].toFixed(2);

  bar.clear();


  table.push(row);
  bar.clear();


}


const analyzePerformance = async () => {
  var start = Date.now();
  await queryNTimes(process.argv[2], getAttraction, 'attractions');
  await queryNTimes(process.argv[2], getRestaurant, 'restaurants');
  await queryNTimes(process.argv[2], getHotel, 'hotels');
  var end = Date.now();
  console.log('\n')
  console.log(`${table.toString()}`)
  console.log(`\n\t\t\t  Transactions complete \n\t\t\t Finished in ${(end - start) / 1000} seconds\n`);
  process.exit();
  
}

analyzePerformance();
