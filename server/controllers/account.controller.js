const axios          = require('axios');
const urls           = require('../config/database.config.js');


//Creating a new account
//req.body has :
//    "accountType": "string",
//    "username": "string",
//    "email": "string",
exports.createAccount = (req, res) => {
    console.log('Creating an account........📬');
    axios.post(urls.baseUrl.concat('/accounts'), req.body)
        .then(response => {
            res.send(response.data);

        })
        .catch(error => {
            console.log(error);
        });

};
//Signing a user
//req.body has : 
// username or email
// password
exports.signIn = (req, res) => {
    console.log('Signing In........📫');
    axios({
		  method:'post',
		  url:urls.baseUrl.concat('/accounts/login'),
		  data: req.body,
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