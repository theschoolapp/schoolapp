const axios          = require('axios');
const urls           = require('../config/database.config.js');
const moment = require('moment');
const _      = require('lodash');

//Get all marks/results for a single student
//Requires the student record id as part of the request object

//Get marks
exports.getMarks = (req, res) => {
    
    console.log("Getting All Marks....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/marks'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Get all class schedules for a single student
//Requires the student record id as part of the request object

//Get class schedules
exports.getClasses = (req, res) => {
    
   console.log("Getting Student's Classes....");

    axios.get(urls.baseUrl.concat('/students/' + req.body.studentId + '/classLists'))
        .then(response => {
            //res.send(response.data);
            console.log(response.data);
            let linkArray = [];
            let classes = [];
            _.each(response.data, (cl) => {
                
                linkArray.push(urls.baseUrl.concat('/classes/' + cl.classId));

                
            });

            axios.all(linkArray.map(l => axios.get(l)))
              .then(axios.spread(function (...ress) {
                
                
                _.each(ress,(ts)=>{  classes.push(ts.data);});
                res.send(classes);
              }));
              
            
        })
        .catch(error => {
            console.log(error);
        });
};

//Get class schedules
exports.getClassSchedule = (req, res) => {
    
   console.log("Getting Student's Class Scedule....");

    axios.get(urls.baseUrl.concat('/students/' + req.body.studentId + '/classLists'))
        .then(response => {
            //res.send(response.data);
            console.log(response.data);
            let linkArray = [];
            let timeSlots = [];
            _.each(response.data, (cl) => {
                
                linkArray.push(urls.baseUrl.concat('/classes/' + cl.classId + '/timeSlots'));
                
            });

            axios.all(linkArray.map(l => axios.get(l)))
              .then(axios.spread(function (...ress) {
                
                console.log(res.length);
                _.each(ress,(ts)=>{ _.each(ts.data,(a)=>{ timeSlots.push(a) }); });
                res.send(timeSlots);
              }));
              
            
        })
        .catch(error => {
            console.log(error);
        });
};

//Get all exam schedules for a single student
//Requires the student record id as part of the request object
exports.getExamSchedule = (req, res) => {
    
    console.log("got Exam Schedule....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/exams'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Get all events schedule
exports.getEvents = (req, res) => {
    
    console.log("got Events Schedule....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/events'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Get all Finacial Data for a single student
//Requires the student record id as part of the request object
exports.getFinance = (req, res) => {
    
    console.log("got Finance....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/financeRecords'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Upload Assignment as file for a single student, for a given assignment
//Requires the student record id and assignment record id as part of the request object
exports.uploadAssignment = (req, res) => {
    
    console.log("Up loadload Assignment....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/classAssignments'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Get all messages for a single student
//Requires the student record id as part of the request object

exports.getMessages = (req, res) => {
    
    console.log("got Msgs....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/messages'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Send a message from a single student to a single reciever
//Requires the student record id and the receievers record id as part of the request object

exports.sendMessage = (req, res) => {
    
    console.log("sent a Msg....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/messages'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};
