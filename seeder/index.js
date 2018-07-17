const axios = require('axios');
const defaults = require('./defaults');
const path = require('path');
const students = require('./dummyData/students50.json');


//Start Up
console.log('Seeder waking up.....');
console.log('Seeder connecting to...' + defaults.localDB);
console.log('Base API url...' + defaults.baseUrl);

//

const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};



//Add Students
//for( i in students ){

	
	//if (i < 1 ) {
		console.log("'"+ students[0] + "'");
		console.log(JSON.parse("'"+ students[0] + "'");

		axios.post('http://localhost:3000/api/students', JSON.parse(students[0]), config)
		  .then(function (response) {
		    console.log(response.data);
		  })
		  .catch(function (error) {
		  	console.log("error");
		    console.log(error);
		  });

	//}
	


//}


