const axios          = require('axios');
const urls           = require('../config/database.config.js');




//Get all marks/results for a single student
//Requires the student record id as part of the request object
exports.newAnnouncement = (req, res) => {
    res.send('New Announcement');
};

//Student Functions
//--------------------------------------------------//
//Get all class schedules for a single student
//Requires the student record id as part of the request object
exports.getAllStudents = (req, res) => {
    console.log('getting All students');

   

};
//Get a single student
//Requires the student record id as part of the request object
exports.getStudent = (req, res) => {
    console.log("Getting a single Student...");

    

};
//Create new student object and save to db
//Requires the full student record as part of the request object
exports.addStudent = (req, res) => {
    console.log('Adding Student....');

  
    
   
};
//--------------------------------------------------//
//--------------------------------------------------//



//Teacher Functions
//--------------------------------------------------//

//Get all teachers
exports.getAllTeachers = (req, res) => {
    console.log('getting All Teachers');

     
};

//Get a single Teacher
//Requires the teacher record id as part of the request object
exports.getTeacher = (req, res) => {
     console.log("Getting a single teacher...");

    
};

//Add a new Teacher
//Requires the teacher record as part of the request object
exports.addTeacher = (req, res) => {
    console.log('Adding Teacher....');

};
//--------------------------------------------------//
//--------------------------------------------------//



//Add a new Class
//Requires the class info
exports.addClass = (req, res) => {
    console.log('Adding a Class....');

};

//Add a new Subject
//Requires the subject info
exports.addSubject =  (req, res) => {

};

//Schedule Class
//Requires the timeSlot record as part of the request object
exports.addTimeSlot = (req, res) => {
    
  
    
};

//Attendance Functions
//--------------------------------------------------//
//Upload Assignment as file for a single student, for a given assignment
//Requires the student record id and assignment record id as part of the request object
exports.getAttendance = (req, res) => {
    console.log('getting All Attendance');

    
};
//--------------------------------------------------//
//--------------------------------------------------//

//Marks Functions
//--------------------------------------------------//
//Get all messages for a single student
//Requires the student record id as part of the request object
exports.getAllMarks = (req, res) => {
    console.log('getting All Marks');

};
//--------------------------------------------------//
//--------------------------------------------------//

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


//Create new task
exports.addTask = (req, res) => {
    
    console.log("Adding a task....");
    console.log(req.body);


    axios.post(urls.baseUrl.concat('/tasks'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};