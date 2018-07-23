//Express + middleware
const express        = require('express');
const bodyParser     = require('body-parser');
//const session        = require('express-session');
const axios          = require('axios');
const mongoose       = require('mongoose');
const cors           = require('cors');

const csurf = require('csurf');
const cookieParser = require('cookie-parser');

//Defaults
const urls           = require('./config/database.config.js');


//Api Routers
const accountRouter  = require('./routes/account.routes.js');
const studentRouter  = require('./routes/student.routes.js');
const teacherRouter  = require('./routes/teacher.routes.js');
const parentRouter   = require('./routes/parent.routes.js');
const adminRouter    = require('./routes/admin.routes.js');





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
  	console.log('An error occured...⚠️');
  	console.log('Could not access School-Api...‼️');
  	process.exit(0);
    //console.log(error);
  });

//Initialize express
const app  = express();
//Enviroment Port
const port = process.env.PORT || 5000;


//CSURF
const csrfMiddleware = csurf({
  cookie: true
});
 

//Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//Parse requests of content-type - application/json
app.use(bodyParser.json());
//Cookie muncher
app.use(cookieParser());
//CSRF Middleware
//app.use(csrfMiddleware);
//CORS
app.use(cors());


//Starter route
app.get('/', (req, res) => {

    axios.get( urls.baseUrl.concat('/admins') )
	  .then(response => {
	    console.log(response.data);
	    res.send(response.data);
	  })
	  .catch(error => {
	    console.log(error);
	  });
});


app.use('/accounts', accountRouter);
app.use('/admin', adminRouter);
app.use('/student', studentRouter);
app.use('/parent', parentRouter);
app.use('/teacher', teacherRouter);



//Start server listening on port :5000
app.listen( port, () => {
  	console.log('Server is starting...🚀');
	console.log('Server now listening on 👨🏾‍💻...http://localhost:' + port);
});