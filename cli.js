#!/usr/bin/env node

const program = require('commander');
const SpeedTest = require('./main');

program.version('1.0.0')
  .description('Network Speed Test CLI');

program
  .command('test')
  .description('Run the network speed test')
  .action(() => {
    const speedTest = new SpeedTest();
  
    speedTest.startTest()
      .then(result => {
        console.log('Speed Test Result:', result);
      })
      .catch(error => {
        console.error('Speed Test Error:', error);
      });
  });

program.parse(process.argv);
