const axios          = require('axios');
const urls           = require('../config/database.config.js');
const moment = require('moment');
const _      = require('lodash');


//Get marks
// req.body has
// - classId
exports.getClassMarks = (req, res) => {
    
    console.log("Getting All Marks for a single class....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/classes' + req.body.classId + '/marks'))
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};
//Add Mark
// req.body has
// - markType
// - mark
// - studentId
// - classId
exports.addStudentMark = (req, res) => {
    
    console.log("Adding a Mark for a single Student....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/marks'), req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};


//Get class schedules
//req.body has
// - teacherId
exports.getTeacherSchedule = (req, res) => {
    
    console.log("Getting Teacher's Class Scedule....");
    console.log(req.body.teacherId);

    axios.get(urls.baseUrl.concat('/teachers/' + req.body.teacherId + '/classes'))
        .then(response => {
            console.log(response.data);
            let linkArray = [];
            let timeSlots = [];
            _.each(response.data, (cl) => {
                
                linkArray.push(urls.baseUrl.concat('/classes/' + cl.id + '/timeSlots'));
                
            });

            axios.all(linkArray.map(l => axios.get(l)))
              .then(axios.spread(function (...ress) {
                
                console.log(ress.length);
                _.each(ress,(ts)=>{ timeSlots.push(ts.data);});
                res.send(timeSlots);
              }));
              
            
        })
        .catch(error => {
            console.log(error);
        });
};

//Get the exam schedule for all of a teacher's classes
exports.getExamSchedule = (req, res) => {
    
    console.log("Getting Exam Schedule....");
    console.log(req.body);

   axios.get(urls.baseUrl.concat('/teachers/' + req.body.teacherId + '/classes'))
        .then(response => {
            console.log(response.data);
            let linkArray = [];
            let examSlots = [];
            _.each(response.data, (cl) => {
                
                linkArray.push(urls.baseUrl.concat('/classes/' + cl.id + '/exams'));
                
            });

            axios.all(linkArray.map(l => axios.get(l)))
              .then(axios.spread(function (...ress) {
                
                console.log(ress.length);
                _.each(ress,(ts)=>{ examSlots.push(ts.data);});
                res.send(timeSlots);
              }));
              
            
        })
        .catch(error => {
            console.log(error);
        });
};

//Get all events schedule
exports.getEvents = (req, res) => {
    
    console.log("Getting Events....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/events'))
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Get all teacher Announcements
exports.getAnnouncements = (req, res) => {
    
    console.log("Getting Teacher Announcements....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/annoucements'))
    .then(response => {
        console.log(response.data);
        let tAnn = [];
        _.each(response.data, ann =>{
          if(ann.forTeachers){
            tAnn.push(ann);
          }
        });
        res.send(tAnn);
    })
    .catch(error => {
        console.log(error);
    });
};


//Upload Assignment 
//req.body has
// - title
// - assignmentFileName
// - dueDate
// classId
// teacherId
exports.uploadAssignment = (req, res) => {
    
    console.log("Uploading an Assignment....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/classAssignments'),req.body)
    .then(response => {
        console.log(response.data);
        

        axios.post(urls.baseUrl.concat('/containers'), { name: response.data.title })
        .then(response => {
        console.log(response.data);
        res.send(response.data);
        
        })
        .catch(error => {
            console.log(error);
        });
        
    })
    .catch(error => {
        console.log(error);
    });
};
//Get all classAssignments
// req.body has 
// teacherId
exports.getAllAssignments = (req, res) => {
    
    console.log("Getting All Teachers' Assignments....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/teachers' + req.body.teacherId + '/classAssignments'))
    .then(response => {
        console.log(response.data);
        
    })
    .catch(error => {
        console.log(error);
    });
};
//Get all submissions by students for a classAssignment
//req.body has 
// - classAssignmentId
exports.getStudentSubmissions = (req, res) => {
    
    console.log("Getting All Submissions...");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/classAssignments' + req.body.classAssignmentId + '/submissions'))
    .then(response => {
        console.log(response.data);
        
    })
    .catch(error => {
        console.log(error);
    });
};

//Get the student attendance of a class
// req.body has
// classId
exports.getClassAttendance = (req, res) => {
    
    console.log("Getting a class attendance....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/classes' + req.body.classId + '/attendances'))
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Add a student attendance for a class
// req.body has
// classId
// studentId
// date
// present
exports.addStudentAttendance = (req, res) => {
    
    console.log("Adding a student attendance....");
    console.log(req.body);

    axios.post(urls.baseUrl.concat('/attendances'), req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};




//Get all messages for a teacher
//Requires the teacher record id as part of the request object
exports.getMessages = (req, res) => {
    
    console.log("Getting Teacher Msgs....");
    console.log(req.body);

    axios.get(urls.baseUrl.concat('/teachers' + req.body.teacherId + '/messages'))
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};

//Send a message from an teacher to a single reciever
//Requires the id of the teacher's record as part of the request object (teacherId)
//Requires the id of the receiever's record as part of the request object (adminId, studentId, parentId)
//req.body.message has : 
// - msg
// - from (name)
// - to (name)
// - sentDate
exports.sendMessage = (req, res) => {
    console.log('send Msg');
    if(!req.body.teacherId){
       res.send('No teacherId in request...'); 
   }else{

     if(req.body.studentId){

        axios.post(urls.baseUrl.concat('/students' + req.body.studentId + '/messages'),req.body.message)
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
