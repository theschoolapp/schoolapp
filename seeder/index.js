const axios = require('axios');
const defaults = require('./defaults');
const students = require('./dummyData/students50.json');


//Start Up
console.log('Seeder waking up.....');
console.log('Seeder connecting to...' + defaults.localDB);


//Add Students
for(i in students){

	console.log(students[i]);

}


