const routes = require('express').Router();

//Controllers
const student = require('../controllers/student.controller.js');
const admin = require('../controllers/admin.controller.js');


//Initial Route
routes.get('/', (req, res)=>{
	res.json({ "head":"Welcome to the routes",
				"/student": ["/getMarks", "/getFees"]});
});


// Student Routes
//---------------//
routes.get('/getMarks', student.getMarks);









module.exports = routes;