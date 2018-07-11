//Required Models
const adminModel     = require('../models/admin.model.js');
const subjectModel   = require('../models/subject.model.js');


//Get all marks/results for a single student
//Requires the student record id as part of the request object
exports.newAnnouncement = (req, res) => {
    res.send('New Announcement');
};

//Get all class schedules for a single student
//Requires the student record id as part of the request object
exports.getAllStudents = (req, res) => {
    res.send('got All students');
};

//Get all class schedules for a single student
//Requires the student record id as part of the request object
exports.getStudent = (req, res) => {
    res.send('got one student');
};

//Get all exam schedules for a single student
//Requires the student record id as part of the request object
exports.addStudent = (req, res) => {
    res.send('added Student');
};

//Get all events schedule
exports.getAllTeachers = (req, res) => {
    res.send('got all Teachers');
};

//Get all events schedule
exports.getTeacher = (req, res) => {
    res.send('got one Teacher');
};

//Add a new Teacher
//Requires the teacher info
exports.addTeacher = (req, res) => {
    res.send('added Teacher');
};

//Add a new Class
//Requires the class info
exports.addClass = (req, res) => {
    res.send('added class');
};

//Add a new Subject
//Requires the subject info
exports.addSubject = (req, res) => {
    
    let obj = req.body;
    console.log(obj);

    res.json({"msg": obj});
};

//Schedule Class
//Requires the class info and class timetables
exports.addTimeSlot = (req, res) => {
    res.send('created new Time Slot');
};


//Upload Assignment as file for a single student, for a given assignment
//Requires the student record id and assignment record id as part of the request object
exports.getAttendance = (req, res) => {
    res.send('got Attendance');
};


//Get all messages for a single student
//Requires the student record id as part of the request object
exports.getMarks = (req, res) => {
    res.send('got Marks');
};

//Get all messages for a single student
//Requires the student record id as part of the request object
exports.getMessages = (req, res) => {
    res.send('got Msgs');
};

//Send a message from a single student to a single reciever
//Requires the student record id and the receievers record id as part of the request object
exports.sendMessage = (req, res) => {
    res.send('send Msg');
};
