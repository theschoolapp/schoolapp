//Express + middleware
const express        = require('express');
const bodyParser     = require('body-parser');
<<<<<<< HEAD
//Database
=======
>>>>>>> 1864aa7bbfbbec2f43b091fbff32a17f1ca8c5f4
const dbConfig       = require('./config/database.config.js');
const mongoose       = require('mongoose');
//Require Routers
const studentRouter  = require('./routes/student.routes.js');
const teacherRouter  = require('./routes/teacher.routes.js');
const parentRouter   = require('./routes/parent.routes.js');
const adminRouter    = require('./routes/admin.routes.js');

//Initialize express and port
const app  = express();
const port = 3000; 

//Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//Parse requests of content-type - application/json
app.use(bodyParser.json());

//Database Config
<<<<<<< HEAD
//mongoose.Promise = global.Promise;
// Connecting to the database
=======
mongoose.Promise = global.Promise;
//Connecting to the database
>>>>>>> 1864aa7bbfbbec2f43b091fbff32a17f1ca8c5f4
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});


//Starter route
app.get('/', (req, res) => {
    res.send("Welcome to the SchoolApp API");
});


//Assign Routers to base paths
app.use('/student', studentRouter);
app.use('/teacher', teacherRouter);
app.use('/parent', parentRouter);
app.use('/admin', adminRouter);

//Start server listening on port :3000
app.listen( port, () => {
  console.log('School API is now running at : ' + port);
});