const axios = require('axios');
const defaults = require('./defaults');
const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

//Check if schoolapi is up
axios.get('http://localhost:3000/')
  .then(response => {
    console.log(response.data);
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
    console.log(error);
    
  });



app.get('/', (req, res) => {

	axios.get('http://localhost:3000/api/admins')
  .then(response => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch(error => {
    console.log(error);
    res.send(error);
  });
    
});

app.listen(port, () => {
	console.log('Server is starting...🚀');
	console.log('Server now listening on 👨🏾‍💻...http://localhost:' + port);
})











