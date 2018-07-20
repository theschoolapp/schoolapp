const routes = require('express').Router();

//Controllers
const parent = require('../controllers/parent.controller.js');


// Parent Routes
//-----------------//
routes.get('/getMarks', parent.getMarks);

routes.post('/getClassSchedule', parent.getClassSchedule);

routes.get('/getExamSchedule', parent.getExamSchedule);

routes.get('/getEvents', parent.getEvents);

routes.get('/getMessages', parent.getMessages);

routes.get('/sendMessage', parent.sendMessage);




module.exports = routes;