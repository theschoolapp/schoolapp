const axios  = require('axios');
const urls   = require('../config/database.config.js');
const moment = require('moment');
const _      = require('lodash');

//Quick testing routing
// for dev...
exports.test = (req, res) => {
    
    res.send(axios.get(urls.baseUrl.concat('/events/count')));
};
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Dashboard Function
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
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
        axios.get(urls.baseUrl.concat('/tasks')),
        axios.get(urls.baseUrl.concat('/teacherAttendances')),
        axios.get(urls.baseUrl.concat('/annoucements'))

      ])
      .then(axios.spread(function (nS, nT, nE, nM, tasks, teachersA, anns) {
        
        // Numbers
        obj.nS = nS.data.count;
        obj.nT = nT.data.count;
        obj.nE = nE.data.count;
        obj.nM = nM.data.count;
        //----------------------------------//
        //Get only today's tasks
        let tsks = [];
        _.each(tasks.data, (task)=>{
            
            if(moment(task.date).isSame(moment(), 'day')){
                tsks.push(task);
            }
        });
        obj.todaysTasks = tsks;
        //--------------------------------//
        // Teacher attendance
        tas = {
            onLeave: 0,
            present: 0,
            absent: 0
        };
        _.each(teachersA.data, (ta)=>{

            if(ta.present){
                tas.present ++;
            }
            if(!ta.present && !ta.onLeave){
                tas.absent ++;
            }
            if(ta.onLeave){
                tas.onLeave ++;
            }

        });
        obj.teachersAttendance = tas;
        //--------------------------------//
        // Announcements
        obj.announcements = anns.data;
        //--------------------------------//


        res.send(obj);
        console.log(obj);

      }));

};
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Announcement Function
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Create new announcement
//req.body has
// - "msg"
// - "title"
// - "from"
exports.addAnnouncement = (req, res) => {
    console.log('Adding new announcement...');
    axios.post(urls.baseUrl.concat('/annoucements'),req.body)
    .then(response => {
        res.send(response.data);
        
    })
    .catch(error => {
        console.log(error);
    });
};
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Student/Parent Functions
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//[Get] all Students
exports.getAllStudents = (req, res) => {
    console.log('getting All students');

    axios.get(urls.baseUrl.concat('/students'))
    .then(response => {
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
//  "firstName": "string",
// "middleName": "string",
// "lastName": "string",
// "gender": "string",
// "dob": "2018-07-19T06:36:07.476Z",
// "phoneNumber": "string",
// "email": "string",
// "religion": "string",
// "yearClass": "string",
// "enrolledClasses": [ "string"],
// "regNumber": "string",
// "lastSchool": "string",
// "lastSchoolMark": "string",
// "sports": ["string"],
//  "parentId": "string",
// "accountId": "string"
exports.addStudent2 = (req, res) => {
    console.log('Adding Student....');

    axios.post(urls.baseUrl.concat('/students'), req.body)
        .then(response => {
            res.send(response.data);

        })
        .catch(error => {
            console.log(error);
        });
   
};
//add Student To Class
// req.body has:
// studentId
// classId
exports.addStudentToClass = (req, res) => {
    console.log('Adding Student to class....');
    
    axios.post(urls.baseUrl.concat('/students/' + req.body.studentId + '/classLists'), { classId: req.body.classId })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
  
};

//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Teacher Functions
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Get all teachers
exports.getAllTeachers = (req, res) => {
    console.log('getting All Teachers');

    axios.get(urls.baseUrl.concat('/teachers'))
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });    
};
//Get a single Teacher
//Requires the teacher record id as part of the request object
exports.getTeacher = (req, res) => {
     console.log("Getting a single teacher...");

     if(!req.body.teacherId){

        res.send('No TeacherId in request...');

    }else{

        let teacherId = req.body.teacherId;
        let subUrl = urls.baseUrl.concat('/teachers');
        let finalUrl = subUrl.concat(teacherId);
        
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
//Add a new Teacher
//Requires the teacher record as part of the request object
//req.body has also :
// validated: boolean
// teacher: {
        // -  "firstName": "string",
        //   "middleName": "string",
        //  "lastName": "string",
        //   "gender": "string",
        //    "religion": "string",
        //    "email": "string",
        //    "phoneNumber1": "string",
        //    "phoneNumber2": "string",
        //    "dob": "string",
        //    "address": "string",
        //    "highestDegree": "string",
        //    "otherDegrees": ["string"],
        //   "university": "string",
        //  "graduatingYear": "string",
        //  "CGPA": "string",
        //   "id": "string",
        //    "accountId": "string"
// }
exports.addTeacher = (req, res) => {
    console.log('Adding Teacher....');
    let teacherAccount = {
        accountType: 'teacher',
        username: '',
        email: '',
        password: ''

    }
    function newTeacher(teacher){

        axios.post(urls.baseUrl.concat('/teachers'), teacher)
        .then(response => {
            console.log('New teacher created (id) : ' + response.data.id);
            res.send({ success: true, teacher: response.data });
        })
        .catch(error => {
            console.log(error);
        }); 
    };

    function createTeacher(id){

        if (req.body.teacher){
         let teacher = {};
         teacher = req.body.teacher;
         teacher.accountId = id;

         newTeacher(teacher);
        }
    };

    function newTeacherAccount(account){

        axios.post(urls.baseUrl.concat('/accounts'), account)
        .then(response => {
            console.log('New teacher ACCOUNT created (id) : ' + response.data.id);
            let teacherAccountId = response.data.id;
            createTeacher(teacherAccountId);
        })
        .catch(error => {
            console.log(error.Error);
        });
    };

    if(!req.body.validated){
        res.send('Validation : False');
    }
    else {

        teacherAccount.email = req.body.teacher.email;
        teacherAccount.username = req.body.teacher.firstName;
        teacherAccount.password = req.body.teacher.email;

        newTeacherAccount(teacherAccount);
    }


};
//Gets all the teachers' attendances
exports.getAllTeacherAttendance = (req, res) => {
    console.log('getting all Teacher Attendances...');

    axios.get(urls.baseUrl.concat('/teacherAttendances'))
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });   
};
//Add new Teacher Attendance
//req.body has
// -"present"
// -"date"
// -"onLeave"
// -"leaveReturnDate"
// -"teacherId"
exports.addTeacherAttendance = (req, res) => {
    console.log('Adding Teacher Attendance....');

    axios.post(urls.baseUrl.concat('/teacherAttendances'), req.body)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};
// Add teacher to class
// req.body has : 
//  "name": "string",
// "classCode": "string",
// "teacherId": "string",
exports.addTeacherToClass = (req, res) => {
    console.log('Adding Teacher to a Class....');

    axios.post(urls.baseUrl.concat('/teachers' + req.body.teacherId + '/classes'), req.body)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Class/Subject/yearClass Functions
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Get all Classes
exports.getAllClasses = (req, res) => {
    console.log('Getting All Classes...');

    axios.get(urls.baseUrl.concat('/classes'))
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};
//Add a new Class
//Requires the class info
exports.addClass = (req, res) => {
    console.log('Adding a Class...');

    axios.post(urls.baseUrl.concat('/classes'), req.body)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};
//Get all Subjects
exports.getAllSubjects = (req, res) => {
    console.log('Getting All Subjects...');

    axios.get(urls.baseUrl.concat('/subjects'))
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};
//Add a new Subject
//Requires the subject info
exports.addSubject =  (req, res) => {
    console.log('Adding a Subject...');

    axios.post(urls.baseUrl.concat('/subjects'), req.body)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};
//Add a Class to subject
//Requires the classId and 
// subjectId
exports.addClassToSubject = (req, res) => {
    console.log('Adding a Class to a subject...');

    axios.patch(urls.baseUrl.concat('/classes' + req.body.classId), { subjectId: req.body.subjectId })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};
//Get all Year Classes
exports.getAllYearClasses = (req, res) => {
    console.log('Getting All Year Classes...');

    axios.get(urls.baseUrl.concat('/yearClasses'))
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};
//Add a new yearClass
//Requires the subject info
//  "name": "string"
exports.addYearClass =  (req, res) => {
    console.log('Adding a year Class...');

    axios.post(urls.baseUrl.concat('/yearClasses'), req.body)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};
//Add a Class to yearClass
//Requires the classId and 
// yearClassId
exports.addClassToYearClass = (req, res) => {
    console.log('Adding a Class to a subject...');

    axios.patch(urls.baseUrl.concat('/classes' + req.body.classId), { yearClassId: req.body.yearClassId })
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};

//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Time Slot Functions
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Schedule Class
//req.body has :
// - "day"
// - "date"
// - "slot"
// - "teacherId"
// - "classId"
// - "classRoomId"
exports.addTimeSlot = (req, res) => {
    console.log("Adding a Time Slot....");

    axios.post(urls.baseUrl.concat('/timeSlots'),req.body)
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });   
};
//Get all Time Slots
exports.getAllTimeSlots = (req, res) => {
    console.log("Adding a Time Slot....");

    axios.get(urls.baseUrl.concat('/timeSlots'))
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });   
};
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Marks Functions
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Get all student marks
exports.getAllMarks = (req, res) => {
    console.log('getting All Marks....');

    axios.get(urls.baseUrl.concat('/marks'))
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

};
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Messages Functions
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Get all messages for a admin
//Requires the admin record id as part of the request object
exports.getMessages = (req, res) => {
    console.log('Getting Admin Msgs....');

    if(!req.body.adminId){
        res.send('No adminId in request...');
    }else{

        let adminId = req.body.adminId;
        axios.get(urls.baseUrl.concat('/admins/' + adminId + '/messages'))
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error);
        });

    }

};
//Send a message from an admin to a single reciever
//Requires the id of the admin's record as part of the request object (adminId)
//Requires the id of the receiever's record as part of the request object (teacherId, studentId, parentId)
//req.body.message has : 
// - msg
// - from (name)
// - to (name)
// - sentDate
exports.sendMessage = (req, res) => {
    console.log('send Msg');
    if(!req.body.adminId){
       res.send('No adminId in request...'); 
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
     if(req.body.teacherId){
        axios.post(urls.baseUrl.concat('/teachers' + req.body.teacherId + '/messages'),req.body.message)
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
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Task Functions
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Create new task
//req.body has:
// - title
// - description
// - date
exports.addTask = (req, res) => {
    
    console.log("Adding a task....");

    axios.post(urls.baseUrl.concat('/tasks'),req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Events Functions
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Create new Event
//req.body has:
// -  "title"
// - "description"
// - "date"
exports.addEvent = (req, res) => {
    console.log("Adding an event....");

    axios.post(urls.baseUrl.concat('/events'),req.body)
    .then(response => {
        res.send(response.data);
    })
    .catch(error => {
        console.log(error);
    });
};
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//--------------------------------------------------//
//Create new Student + Parent
//req.body has:
// - validated : boolean
// - student : { }
// - parent : { }
exports.addStudent = (req, res) => {
    console.log('Creating an Student Account........📬');
    let studentAccount = {
        accountType: 'student',
        username: '',
        email: '',
        password: ''
        };
    let parentAccount = {
        accountType: 'parent',
        username: '',
        email: '',
        password: ''
        };
    
    function linkStudent2Parent(pId, sId) {
        console.log("Linking Student 2 Parent -  parentId - studentId" );
        console.log(pId + " - " + sId);
        axios.patch(urls.baseUrl.concat('/students/' + sId), { parentId: pId })
        .then(response => {

            console.log('New student linked to new parent');
            res.send({ success: true, parentId: pId, studentId: sId });
            
        })
        .catch(error => {
            console.log(error.Error);
        });

    }

    function newStudent(student){

        axios.post(urls.baseUrl.concat('/students'), student)
        .then(response => {

            console.log('New student created (id) : ' + response.data.id);
            let studentId = response.data.id;
            newParentAccount(parentAccount, studentId);
        })
        .catch(error => {
            console.log(error.Error);
        }); 
    };

    function newParent(parent){

        axios.post(urls.baseUrl.concat('/parents'), parent)
        .then(response => {
            console.log('New parent created (id) : ' + response.data.id);
            let parentId = response.data.id;
            let studentId = response.data.studentId;
            linkStudent2Parent(parentId, studentId);

        })
        .catch(error => {
            console.log(error);
        }); 
    };



    function createStudent(id){

        if (req.body.student){
         let student = {};
         student = req.body.student;
         student.accountId = id;

         newStudent(student);
        }
    };

    function createParent(id, studentId){

        if (req.body.parent){
         let parent = {};
         parent = req.body.parent;
         parent.accountId = id;
         parent.studentId = studentId;

         newParent(parent);
        }
    };


    function newStudentAccount(studentAccount){

        axios.post(urls.baseUrl.concat('/accounts'), studentAccount)
        .then(response => {
            console.log('New student ACCOUNT created (id) : ' + response.data.id);
            let studentAccountId = response.data.id;
            createStudent(studentAccountId);
        })
        .catch(error => {
            console.log(error.Error);
        }); 
    };

     function newParentAccount(parentAccount, studentId){

        axios.post(urls.baseUrl.concat('/accounts'), parentAccount)
        .then(response => {
            console.log('New parent ACCOUNT created (id) : ' + response.data.id);
            let parentAccountId = response.data.id;
            createParent(parentAccountId, studentId);
        })
        .catch(error => {
            console.log(error.Error);
        }); 
    };


    if(!req.body.validated){
        res.send('Validation : False');
    }
    else {

        studentAccount.email = req.body.student.email;
        studentAccount.username = req.body.student.firstName;
        studentAccount.password = req.body.student.regNumber;


        parentAccount.email = req.body.parent.email;
        parentAccount.username = req.body.parent.lastName;
        parentAccount.password = req.body.parent.email;

        newStudentAccount(studentAccount);
    }

};




