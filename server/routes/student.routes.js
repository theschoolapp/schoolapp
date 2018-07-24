const routes           = require('express').Router();
const student 		   = require('../controllers/student.controller.js');
//Auth Middleware
const studentAuth      = require('../middleware/studentAuth.js');


// Student Routes
//---------------//
routes.post('/getMarks', student.getMarks);



routes.post('/getClassSchedule', student.getClassSchedule);

routes.post('/getClasses', student.getClasses);

routes.post('/getExamSchedule', student.getExamSchedule);


routes.post('/getStudentAttendance', student.getStudentAttendance);



routes.get('/getEvents', student.getEvents);

routes.get('/getAnnouncements', student.getAnnouncements);



routes.post('/getAssignments', student.getAssignments);

routes.post('/uploadAssignment', student.uploadAssignment);



routes.post('/getMessages', student.getMessages);

routes.post('/sendMessage', student.sendMessage);



module.exports = routes;
