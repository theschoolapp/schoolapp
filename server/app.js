const express        = require('express');
const bodyParser     = require('body-parser');
const dbConfig       = require('./config/database.config.js');
const mongoose       = require('mongoose');
const router         = require('./routes/index.js');

//Initialize express and port
const app  = express();
const port = 3000;

//Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
//Parse requests of content-type - application/json
app.use(bodyParser.json());


//Database Config
mongoose.Promise = global.Promise;
// Connecting to the database
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


//Router
app.use('/api', router);

//Start server listening on port :3000
app.listen( port, () => {
  console.log('School API is now running at : ' + port);
});