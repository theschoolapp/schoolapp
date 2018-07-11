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


<<<<<<< HEAD:server/routes/index.js
// Admin Routes
//---------------//
routes.get('/admin/getMarks', admin.getMarks);

routes.post('/teacher',teacher.createTeacher)

=======
>>>>>>> 139a76ba5ae9de1553c34dca223b51a31920f3c7:server/routes/student.routes.js






module.exports = routes;
