//Router
const routes         = require('express').Router();
//Controller
const account        = require('../controllers/account.controller.js');
//Auth Middleware
const adminAuth      = require('../middleware/adminAuth.js');

// Account Routes
//---------------//

routes.get('/signIn', account.signIn);

routes.post('/signUp', account.signUp);

routes.get('/check', [adminAuth], account.check);



module.exports = routes;