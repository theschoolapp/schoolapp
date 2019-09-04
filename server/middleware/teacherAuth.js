const axios          = require('axios');
const urls           = require('../config/database.config.js');

module.exports = (req, res, next) => {
	console.log("FROM parentAUTH.........👮🏽‍♂️");

	if(!req.headers.userid || !req.headers.accesstoken){
		res.send('Headers not complete...');
		console.log('No headers on request object.....');
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
	    if(response.data.accountType === "teacher"){
	    	next();
	    }else{
	    	res.send('Not Authorized...');
	    }
	    
	  })
	  .catch(error => {

	    console.log(error);

	  });

	}

}