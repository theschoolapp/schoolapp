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
routes.get('/student/getMarks', student.getMarks);


// Admin Routes
//---------------//
routes.get('/admin/getMarks', admin.getMarks);

routes.post('/teacher',teacher.createTeacher)







module.exports = routes;
