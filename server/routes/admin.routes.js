const routes = require('express').Router();

//Controller
const admin = require('../controllers/admin.controller.js');

// Student Routes
//---------------//
routes.post('/addSubject', admin.addSubject);








module.exports = routes;