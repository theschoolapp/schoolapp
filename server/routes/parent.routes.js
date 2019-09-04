const routes          = require('express').Router();
//Controllers
const parent          = require('../controllers/parent.controller.js');
//Auth Middleware
const parentAuth      = require('../middleware/parentAuth.js');


// Parent Routes
//-----------------//
routes.post('/getMarks', parent.getMarks);



routes.post('/getClassSchedule', parent.getClassSchedule);

routes.post('/getClasses', parent.getClasses);

routes.post('/getExamSchedule', parent.getExamSchedule);



routes.get('/getEvents', parent.getEvents);



routes.post('/getFinance', parent.getFinance);

routes.post('/getStudentAttendance', parent.getStudentAttendance);


routes.post('/getMessages', parent.getMessages);

routes.post('/sendMessage', parent.sendMessage);


module.exports = routes;