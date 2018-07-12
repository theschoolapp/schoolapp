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

routes.get('/getClassSchedule', student.getClassSchedule);

routes.get('/getExamSchedule', student.getExamSchedule);

routes.get('/getEventSchedule', student.getEventSchedule);

routes.post('/uploadAssignment', student.uploadAssignment);

routes.get('/getMarks', student.getMarks);










module.exports = routes;
