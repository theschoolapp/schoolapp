const studentModel = require('../models/student.model.js');

//Get all marks/results for a single student
//Requires the student record id as part of the request object
exports.getMarks = (req, res) => {
    res.send('Got Marks');
};

//Get all class schedules for a single student
//Requires the student record id as part of the request object
exports.getClassSchedule = (req, res) => {
    res.send('got Class Scedule');
};

//Get all exam schedules for a single student
//Requires the student record id as part of the request object
exports.getExamSchedule = (req, res) => {
    res.send('got Exam Schedule');
};

//Get all events schedule
exports.getEventSchedule = (req, res) => {
    res.send('got Events Schedule');
};

//Get all Finacial Data for a single student
//Requires the student record id as part of the request object
exports.getFinance = (req, res) => {
    res.send('got Finance');
};

//Upload Assignment as file for a single student, for a given assignment
//Requires the student record id and assignment record id as part of the request object
exports.uploadAssignment = (req, res) => {
    res.send('got Finance');
};

//Get all messages for a single student
//Requires the student record id as part of the request object
exports.getMessages = (req, res) => {
    res.send('got Msgs');
};

//Send a message from a single student to a single reciever
//Requires the student record id and the receievers record id as part of the request object
exports.sendMessage = (req, res) => {
    res.send('sent a Msgs');
};
