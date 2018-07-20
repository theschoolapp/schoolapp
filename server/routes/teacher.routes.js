const routes           = require('express').Router();
//Controllers
const teacher          =  require('../controllers/teacher.controller');
//Auth Middleware
const teacherAuth      = require('../middleware/teacherAuth.js');




// Student Routes
//---------------//
routes.get('/getMarks', teacher.getMarks);

routes.post('/getTeacherSchedule', teacher.getTeacherSchedule);

routes.get('/getExamSchedule', teacher.getExamSchedule);

routes.get('/getEvents', teacher.getEvents);

routes.get('/getAnnouncements');


routes.post('/uploadAssignment', teacher.uploadAssignment);

routes.post('/addStudentMark');



module.exports = routes;