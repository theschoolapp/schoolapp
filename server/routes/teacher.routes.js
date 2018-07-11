const routes = require('express').Router();

//Controllers
const student = require('../controllers/student.controller.js');
const admin = require('../controllers/admin.controller.js');
const teacher=  require('../controllers/teacher.controller')

//Initial Route
routes.get('/', (req, res)=>{
	res.json({ "head":"Welcome to the routes",
				"/student": ["/getMarks", "/getFees"]});
});


// Student Routes
//---------------//
routes.get('/getMarks', student.getMarks);
routes.post('/addmarks',teacher.addMarks)









module.exports = routes;