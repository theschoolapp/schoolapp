//Express + middleware
const express        = require('express');
const bodyParser     = require('body-parser');
const axios          = require('axios');

//Api Routers
//const studentRouter  = require('./routes/student.routes.js');
//const teacherRouter  = require('./routes/teacher.routes.js');
//const parentRouter   = require('./routes/parent.routes.js');
//const adminRouter    = require('./routes/admin.routes.js');


//Check if schoolapi is up
axios.get('http://localhost:3000/')
  .then(response => {
    if(response.data.started){
    	console.log('School-Api is up and running...✅');
    	console.log('School-Api was started on ' + response.data.started + '...🕑');
    }
    else{
    	console.log('School-Api is NOT running...⚠️');
    }
    
  })
  .catch(error => {
  	console.log('An error occured...‼️');
  	console.log('Could not access School-Api...‼️');
  	process.exit(0);
    //console.log(error);
    
  });

//Initialize express and port
const app  = express();
const port = 5000; 

//Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//Parse requests of content-type - application/json
app.use(bodyParser.json());


//Starter route
app.get('/', (req, res) => {

    axios.get('http://localhost:3000/api/admins')
	  .then(response => {
	    res.send(response.data);
	  })
	  .catch(error => {
	    res.send(error);
	  });
});

/*/Assign Routers to base paths
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);
app.use('/parent', parentRouter);
app.use('/admin', adminRouter);
*/

//Start server listening on port :5000
app.listen( port, () => {
  	console.log('Server is starting...🚀');
	console.log('Server now listening on 👨🏾‍💻...http://localhost:' + port);
});