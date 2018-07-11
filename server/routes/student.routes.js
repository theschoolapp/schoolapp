const routes = require('express').Router();

//Controllers
const student = require('../controllers/student.controller.js');
const admin = require('../controllers/admin.controller.js');
const teacher = require('../controllers/teacher.controller.js');

//Initial Route
routes.get('/', (req, res)=>{
	res.json({ "head":"Welcome to the routes",
				"/student": ["/getMarks", "/getFees"]});
});


// Student Routes
//---------------//
routes.get('/getMarks', student.getMarks);


<<<<<<< HEAD

=======
>>>>>>> 1864aa7bbfbbec2f43b091fbff32a17f1ca8c5f4
// Admin Routes
//---------------//
routes.get('/admin/getMarks', admin.getMarks);


<<<<<<< HEAD
=======

>>>>>>> 1864aa7bbfbbec2f43b091fbff32a17f1ca8c5f4






module.exports = routes;
