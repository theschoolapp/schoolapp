const routes = require('express').Router();
const uuid = require('uuid/v4');
const pn = require('../config/paynow.js');
const urls = require('../config/database.config.js');
const axios = require('axios');


let pnSetup = (amount, reference) => {

	return new Promise((resolve,reject)=>{
        let paynow = new pn.Paynow(5408, "f5cda99d-4f59-4962-b324-5b7b62a9f03e");
        paynow.resultUrl = "https://propsight.com/paynow/payment/"+reference;
        paynow.returnUrl = 'https://facebook.com';


        let payment = paynow.createPayment(reference);
        payment.add("Fees Payment...", amount);

        paynow.send(payment).then(response => {
            resolve(response);
            console.log('Pn Response : ', response);
            if (response.success === true) {
                console.log('Response Successful');
            } else {
                console.log('Response not Successful', e);
            }
        }).catch(e => {
            reject(e);
            console.log('Exception when calling Paynow');
        });
    });

};



function savePayment(amount, description, reference, studentId) {

	let data = {
		amount: amount,
		description: description,
		reference: reference,
		studentId: studentId
	}

    axios.post(urls.baseUrl.concat('/payments'), data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.Error);
        });	         
   
}

let paynow = (req, res) => {
	console.log('Starting Transcation...')
	
	let ref = uuid();
	let amount = req.body.amount;
	let description = req.body.description;
	let studentId = req.body.studentId;


	console.log({
		ref: ref,
		amount: amount,
		description: description,
		studentId: studentId
	});
	

    pnSetup(amount, ref).then(response => {
    	    console.log('Now Saving Transcation...')
            res.redirect(response.redirectUrl);
            savePayment(amount, description, ref, studentId);
        }).catch(e => {
            console.log('Exception', e);
        });

};






routes.post('/makePayment', paynow);



module.exports = routes;



