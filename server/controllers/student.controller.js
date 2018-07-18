const axios          = require('axios');
const urls           = require('../config/database.config.js');

//Get all marks/results for a single student
//Requires the student record id as part of the request object
exports.getMarks = (req, res) => {
    console.log('getting All Marks');

    
};

//Get all class schedules for a single student
//Requires the student record id as part of the request object
exports.getClassSchedule = (req, res) => {
    console.log('got Class Scedule');
};

//Get all exam schedules for a single student
//Requires the student record id as part of the request object
exports.getExamSchedule = (req, res) => {
    console.log('got Exam Schedule');
};

//Get all events schedule
exports.getEvents = (req, res) => {
    console.log('got Events Schedule');
};

//Get all Finacial Data for a single student
//Requires the student record id as part of the request object
exports.getFinance = (req, res) => {
    console.log('got Finance');
};

//Upload Assignment as file for a single student, for a given assignment
//Requires the student record id and assignment record id as part of the request object
exports.uploadAssignment = (req, res) => {
    console.log('got Finance');
};

//Get all messages for a single student
//Requires the student record id as part of the request object
exports.getMessages = (req, res) => {
    console.log('got Msgs');
};

//Send a message from a single student to a single reciever
//Requires the student record id and the receievers record id as part of the request object
exports.sendMessage = (req, res) => {
    console.log('sent a Msgs');
};
