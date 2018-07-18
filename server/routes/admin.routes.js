const routes = require('express').Router();
//Controller
const admin = require('../controllers/admin.controller.js');

// Admin Routes
//---------------//
routes.post('/getDashboard', admin.getDashboard);

routes.get('/getAllStudents', admin.getAllStudents);

routes.get('/getStudent', admin.getStudent);

routes.post('/addTask', admin.addTask);








routes.get('/test', admin.test);

module.exports = routes;