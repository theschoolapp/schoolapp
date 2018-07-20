const axios          = require('axios');
const urls           = require('../config/database.config.js');


//Creating a new account
//req.body has :
//    "accountType": "string",
//    "username": "auto-gen",
//    "email": "string",
//    "password": auto-gen

//     student {}
//     parent {}
//     teacher {}
//     admin {}

exports.createAccount = (req, res) => {
    console.log('Creating an account........📬');
    let account = {

    	accountType: '',
    	username: '',
    	email: '',
    	password: ''

    };
    let accountCreated = {};
   

   


    function isEmpty(obj){
    return (Object.getOwnPropertyNames(obj).length === 0);
	}

    if(!req.body.accountType){
    	res.send('No Account Type Stated...');
    }
    else {

    	account.accountType = req.body.accountType;
    	account.email = req.body.email;
    	account.username = req.body.username;
    	account.password = req.body.password;

    	newAccount();
    }

function createModel(){
    console.log("Creating Model...");

	if (req.body.student){
		 let student = {};
		 student = req.body.student;
		 student.accountId = accountCreated.id;

		 newStudent(student);
    


    }
    else if (req.body.parent){
    	 let parent = {};
    	 parent = req.body.parent;
		 parent.accountId = accountCreated.id;
    	
    	newParent(parent);
   

    }
    else if (req.body.teacher){
    	 let teacher = {};
    	 teacher = req.body.teacher;
		 teacher.accountId = accountCreated.id;
    	
    	newTeacher(teacher);
    }
    else {

    	res.send({
    		note: 'No Account model saved with Account..',
    		account: accountCreated
    	});
    }
}

    


    function newAccount(){

    	axios.post(urls.baseUrl.concat('/accounts'), account)
        .then(response => {
            accountCreated = response.data;
            createModel();
        })
        .catch(error => {
            console.log(error.Error);
        });	
    };

    function newStudent(student){

    	axios.post(urls.baseUrl.concat('/students'), student)
        .then(response => {
            res.send(response.data);

        })
        .catch(error => {
            console.log(error.Error);
        });	
    };

    function newParent(parent){

    	axios.post(urls.baseUrl.concat('/parents'), parent)
        .then(response => {
            res.send(response.data);

        })
        .catch(error => {
            console.log(error);
        });	
    };

    function newTeacher(teacher){

    	axios.post(urls.baseUrl.concat('/teachers'), teacher)
        .then(response => {
            res.send(response.data);

        })
        .catch(error => {
            console.log(error);
        });	
    }

    

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
	    let aT = response.data.user.accountType;
	    res.send({
	    	accessToken: accessToken,
	    	userId: userId,
	    	accountType: aT
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