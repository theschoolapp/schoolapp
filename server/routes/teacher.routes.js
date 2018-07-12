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


// mark
//---------------//
routes.get('/getMarks', teacher.getmarks);
routes.post('/addmarks',teacher.addMarks);

//assigments
//___________//
routes.get('/getattendence', teacher.getAttendence)
//routes.post('/postattendence',teacher.addattendence)


// time-table//
routes.get('/classtimetable' ,teacher.getTimeTableClass)
routes.get('/exmatimetable',teacher.getTimeTableExam)




module.exports = routes;