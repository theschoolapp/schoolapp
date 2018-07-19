//Router
const routes         = require('express').Router();
//Controller
const account        = require('../controllers/account.controller.js');
//Auth Middleware
const adminAuth      = require('../middleware/adminAuth.js');

// Account Routes
//---------------//

routes.post('/signIn', account.signIn);

routes.post('/createAccount', account.createAccount);

routes.get('/check', [adminAuth], account.check);



module.exports = routes;