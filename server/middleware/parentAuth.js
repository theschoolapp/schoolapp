const axios          = require('axios');
const urls           = require('../config/database.config.js');

module.exports = (req, res, next) => {
	console.log("FROM parentAUTH.........👮🏽‍♂️");

	if(!req.headers.userid || !req.headers.accesstoken){
		res.send('Headers not complete');
	}else{
		console.log('Now extracting headers.....');

		let subUrl = '/accounts/';
		let finalUrl = subUrl.concat(req.headers.userid);


		axios({
		  method:'get',
		  url:urls.baseUrl.concat(finalUrl),
		  params: {
		  	access_token: req.headers.accesstoken
		  }
		})
	  .then(response => {
	   
	    console.log(response.data);
	    if(response.data.accountType === "admin"){
	    	next();
	    }else{
	    	res.send('You are not an admin.');
	    }
	    
	  })
	  .catch(error => {

	    console.log(error);

	  });

	  	
	}


		
}