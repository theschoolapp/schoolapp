const axios  = require('axios');
const urls   = require('../config/database.config.js');
const moment = require('moment');
const _      = require('lodash');


//[Get] all data for Dashboard
//Requires the adminId on 
exports.getDashboard = (req, res) => {
    console.log('Getting Admin Dashboard');
    let adminId = req.body.adminId;
    console.log('AdminID : ' + adminId);
    let obj = {
            nS: '',
            nT: '',
            nE: '',
            nM: '',
            todaysTasks: [],
            todaysAttendence: [],
            attendanceTrend: [],
            teachersAttendance: {},
            announcements: []
        };

     axios.all([
        axios.get(urls.baseUrl.concat('/students/count')),
        axios.get(urls.baseUrl.concat('/teachers/count')),
        axios.get(urls.baseUrl.concat('/events/count')),
        axios.get(urls.baseUrl.concat('/admins/' + adminId + '/messages/count')),
        axios.get(urls.baseUrl.concat('/tasks'))
      ])
      .then(axios.spread(function (nS, nT, nE, nM, tasks) {
        
        obj.nS = nS.data.count;
        obj.nT = nT.data.count;
        obj.nE = nE.data.count;
        obj.nM = nM.data.count;

        //Get only today's tasks
        let tsks = [];
        _.each(tasks.data, (task)=>{
            
            if(moment(task.date).isSame(moment(), 'day')){
                tsks.push(task);
            }
        });
        obj.todaysTasks = tsks;

        res.send(obj);
        console.log(obj);

      }));

};


//Get all marks/results for a single student
//Requires the student record id as part of the request object
exports.newAnnouncement = (req, res) => {
    res.send('New Announcement');
};

exports.test = (req, res) => {
    
    res.send(axios.get(urls.baseUrl.concat('/events/count')));
};

//Student Functions
//--------------------------------------------------//
//[Get] all Students
exports.getAllStudents = (req, res) => {
    console.log('getting All students');

    axios.get(urls.baseUrl.concat('/students'))
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};
//[Get] a single student
//Requires the student record id as part of the request object
exports.getStudent = (req, res) => {
    console.log("Getting a single Student...");
    if(!req.body.studentId){

        res.send('No StudentId in request...');

    }else{

        let studentId = req.body.studentId;
        let subUrl = urls.baseUrl.concat('/students');
        let finalUrl = subUrl.concat(studentId);
        
        axios.get(finalUrl)
        .then(response => {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

    }
    
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