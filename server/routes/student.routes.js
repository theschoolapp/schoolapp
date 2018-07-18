const routes = require('express').Router();
const student = require('../controllers/student.controller.js');


// Student Routes
//---------------//
routes.get('/getMarks', student.getMarks);

routes.get('/getClassSchedule', student.getClassSchedule);

routes.get('/getExamSchedule', student.getExamSchedule);

routes.get('/getEventSchedule', student.getEventSchedule);

routes.post('/uploadAssignment', student.uploadAssignment);

routes.get('/getMarks', student.getMarks);



module.exports = routes;
