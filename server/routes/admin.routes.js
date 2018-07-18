const routes = require('express').Router();
//Controller
const admin = require('../controllers/admin.controller.js');

// Admin Routes
//---------------//

//Inputs
routes.post('/addTask', admin.addTask);










module.exports = routes;