const routes = require('express').Router();
const uuid = require('uuid/v4');




routes.get('/makePayment', paynow);

let paynow = (req, res) => {

	res.send('Making Payment...');
};

module.exports = routes;



