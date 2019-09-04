const routes           = require('express').Router();
//Controllers
const teacher          =  require('../controllers/teacher.controller');
//Auth Middleware
const teacherAuth      = require('../middleware/teacherAuth.js');




// Student Routes
//---------------//

routes.post('/getClassMarks', teacher.getClassMarks);

routes.post('/addStudentMark', teacher.addStudentMark);




routes.post('/getTeacherSchedule', teacher.getTeacherSchedule);

routes.post('/getExamSchedule', teacher.getExamSchedule);



routes.post('/getClassAttendance', teacher.getClassAttendance);

routes.post('/addStudentAttendance', teacher.addStudentAttendance);



routes.post('/getMessages', teacher.getMessages);

routes.post('/sendMessage', teacher.sendMessage);



routes.get('/getAnnouncements', teacher.getAnnouncements);



routes.get('/getEvents', teacher.getEvents);



routes.post('/uploadAssignment', teacher.uploadAssignment);

routes.post('/getAllAssignments', teacher.getAllAssignments);

routes.post('/getStudentSubmissions', teacher.getStudentSubmissions);




module.exports = routes;