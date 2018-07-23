const axios          = require('axios');
const urls           = require('../config/database.config.js');
const moment = require('moment');
const _      = require('lodash');



//Get marks
// req.body has
// studentId
exports.getMarks = (req, res) => {
    
    console.log("Getting All Marks....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/students' + req.body.studentId + '/marks'))
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};



//Get Student's classes
// req.body has
// studentId
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
// req.body has
// studentId
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
    axios.get(urls.baseUrl.concat('/students/' + req.body.studentId + '/classLists'))
        .then(response => {
            //res.send(response.data);
            console.log(response.data);
            let linkArray = [];
            let timeSlots = [];
            _.each(response.data, (cl) => {
                
                linkArray.push(urls.baseUrl.concat('/classes/' + cl.classId + '/exams'));
                
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

//Get all events
exports.getEvents = (req, res) => {
    
    console.log("got Events Schedule....");

    axios.get(urls.baseUrl.concat('/events'))
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Get all Student Announcements
exports.getAnnouncements = (req, res) => {
    
    console.log("Getting Student Announcements....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/annoucements'))
    .then(response => {
        console.log(response.data);
        let tAnn = [];
        _.each(response.data, ann =>{
          if(ann.forStudents){
            tAnn.push(ann);
          }
        });
        res.send(tAnn);
    })
    .catch(error => {
        console.log(error);
    });
};

//get all assignments for all classes
//req.body has
// studentId
exports.getAssignments = (req, res) => {
    
    console.log("Getting Student Assignments....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/students/' + req.body.studentId + '/classLists'))
        .then(response => {
            console.log(response.data);
            let linkArray = [];
            let assignments = [];
            _.each(response.data, (cl) => {
                
                linkArray.push(urls.baseUrl.concat('/classes/' + cl.classId + '/classAssignments'));
                
            });

            axios.all(linkArray.map(l => axios.get(l)))
              .then(axios.spread(function (...ress) {
                
                console.log(res.length);
                _.each(ress,(ts)=>{ _.each(ts.data,(a)=>{ assignments.push(a) }); });
                res.send(assignments);
              }));
              
            
        })
        .catch(error => {
            console.log(error);
        });
};
//Upload Assignment as file for a single student, for a given assignment
//Requires the student record id and assignment record id as part of the request object
//submissionDate
//filename
exports.uploadAssignment = (req, res) => {
    
    console.log("Uploading Assignment....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/submissions'),req.body)
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
    
    console.log("Getting Student Msgs....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/students' + req.body.studentsId + '/messages'))
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Send a message from a student to a single reciever
//Requires the id of the student's record as part of the request object (teacherId)
//Requires the id of the receiever's record as part of the request object (adminId, teacherId, parentId)
//req.body.message has : 
// - msg
// - from (name)
// - to (name)
// - sentDate
exports.sendMessage = (req, res) => {
    console.log('send Msg');
    if(!req.body.studentId){
       res.send('No studentId in request...'); 
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
     if(req.body.parentId){
        axios.post(urls.baseUrl.concat('/parents' + req.body.parentId + '/messages'),req.body.message)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
     }

   }

};
