const axios          = require('axios');
const urls           = require('../config/database.config.js');
const moment = require('moment');
const _      = require('lodash');

//Get marks
exports.getMarks = (req, res) => {
    
    console.log("Getting parent's student marks....");

    axios.get(urls.baseUrl.concat('/students' + req.body.studentId + '/marks'))
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });

    
};

//Get all class schedules for a single student
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
    
    console.log("Getting Events Schedule....");

    axios.get(urls.baseUrl.concat('/events'))
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Get all Finacial Data for a single student
//Requires the student record id as part of the request object
exports.getFinance = (req, res) => {
    
    console.log("Getting Financial Information for Student....");
    

    axios.post(urls.baseUrl.concat('/students' + req.body.studentId + '/financeRecords'))
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Get all messages for a parent
//Requires the parent record id as part of the request object
exports.getMessages = (req, res) => {
    
    console.log("Getting all messages for a parent.....");
    
    if(!req.body.parentId){
        res.send('No parentId in request...');
    }else{

        let parentId = req.body.parentId;
        axios.get(urls.baseUrl.concat('/parents/' + parentId + '/messages'))
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

    }
};

//Send a message from a single student to a single reciever
//Requires the student record id and the receievers record id as part of the request object
exports.sendMessage = (req, res) => {
    
    if(!req.body.parentId){
       res.send('No parentId in request...'); 
   }else{

     if(req.body.teacherId){
        axios.post(urls.baseUrl.concat('/teachers' + req.body.teacherId + '/messages'),req.body.message)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
     }
     if(req.body.adminId){
        axios.post(urls.baseUrl.concat('/admins' + req.body.adminId + '/messages'),req.body.message)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
     }

   }
};
