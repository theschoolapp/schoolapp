const axios          = require('axios');
const urls           = require('../config/database.config.js');



exports.signUp = (req, res) => {
    console.log('Signing Up........📬');


};

exports.signIn = (req, res) => {
    console.log('Signing In........📫');
    axios({
		  method:'post',
		  url:urls.baseUrl.concat('/accounts/login'),
		  data: {
		  	username: "admin",
		    password: "admin"
		    },
		  params: {
		  	include: "user"
		  }
		})
	  .then(response => {
	   
	    let accessToken = response.data.id;
	    let userId = response.data.user.id;
	    res.send({
	    	accessToken: accessToken,
	    	userId: userId
	    });
	    console.log({
	    	accessToken: accessToken,
	    	userId: userId
	    });

	  })
	  .catch(error => {

	    console.log(error);

	  });

};


exports.check = (req, res) => {
	console.log('Check Authorization........📫');
	res.send('Authorized!....👮🏽‍♂️');

    };