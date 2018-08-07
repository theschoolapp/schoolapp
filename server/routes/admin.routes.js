const routes = require('express').Router();
//Controller
const admin = require('../controllers/admin.controller.js');
//Auth Middleware
const adminAuth      = require('../middleware/adminAuth.js');

// Admin Routes
//---------------//
routes.post('/getDashboard', admin.getDashboard);



routes.get('/getAllStudents', admin.getAllStudents);

routes.post('/getStudent', admin.getStudent);

routes.post('/addStudent', admin.addStudent); //Now creates both student + parent records...

routes.post('/editStudent', admin.editStudent);



routes.get('/getAllTeachers', admin.getAllTeachers);

routes.post('/getTeacher', admin.getTeacher);

routes.post('/addTeacher', admin.addTeacher);

routes.post('/editTeacher', admin.editTeacher);

routes.get('/getAllTeacherAttendance', admin.getAllTeacherAttendance);

routes.post('/addTeacherAttendance', admin.addTeacherAttendance);

routes.post('/addTeacherToClass', admin.addTeacherToClass);



routes.post('/addLibrarian', admin.addLibrarian);

routes.get('/getAllLibrarians', admin.getAllLibrarians);

routes.post('/editLibrarian', admin.editLibrarian);



routes.post('/addFinanceAdmin', admin.addFinanceAdmin);

routes.get('/getAllFinanceAdmins', admin.getAllFinanceAdmins);

routes.post('/editFinanceAdmin', admin.editFinanceAdmin);



routes.get('/getAllClasses', admin.getAllClasses);

routes.get('/getAllSubjects', admin.getAllSubjects);

routes.get('/getAllYearClasses', admin.getAllYearClasses);

routes.post('/addClass', admin.addClass);

routes.post('/addSubject', admin.addSubject);

routes.post('/addYearClass', admin.addYearClass);

routes.post('/addClass', admin.addClass);

routes.post('/addClassToSubject', admin.addClassToSubject);

routes.post('/addClassToYearClass', admin.addClassToYearClass);

routes.post('/addStudentToClass', admin.addStudentToClass);




routes.post('/addTimeSlot', admin.addTimeSlot);

routes.post('/getAllTimeSlots', admin.getAllTimeSlots);


routes.post('/getAllMarks', admin.getAllMarks);



routes.post('/getMessages', admin.getMessages);

routes.post('/sendMessage', admin.sendMessage);



routes.post('/addTask', admin.addTask);

routes.post('/addEvent', admin.addEvent);

routes.post('/addAnnouncement', admin.addAnnouncement);


routes.get('/test', admin.test);


module.exports = routes;


