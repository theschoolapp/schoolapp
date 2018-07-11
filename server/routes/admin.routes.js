const routes = require('express').Router();
//Controller
const admin = require('../controllers/admin.controller.js');

// Admin Routes
//---------------//

//Inputs
routes.post('/addSubject', admin.addSubject);

routes.post('/addStudent', admin.addStudent);

routes.post('/addTeacher', admin.addTeacher);

routes.post('/addClass', admin.addClass);

routes.post('/addTimeSlot', admin.addTimeSlot);

//Outputs
routes.get('/getStudent', admin.getStudent);

routes.get('/getAllStudent', admin.getAllStudents);








module.exports = routes;