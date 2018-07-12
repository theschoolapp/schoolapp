//Required Models
const adminModel       = require('../models/admin.model.js');
const subjectModel     = require('../models/subject.model.js');
const studentModel     = require('../models/student.model.js');
const teacherModel     = require('../models/teacher.model.js');
const classModel       = require('../models/class.model.js');
const timeSlotModel    = require('../models/timeslot.model.js');
const markModel        = require('../models/mark.model.js');
const attendanceModel  = require('../models/attendance.model.js');




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

     studentModel.find()
    .then(students => {
        res.send(students);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });

};
//Get a single student
//Requires the student record id as part of the request object
exports.getStudent = (req, res) => {
    console.log("Getting a single Student...");

    studentModel.findOne(req.params.firstName)
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "Student not found with name " + student.firstName
            });            
        }
        res.send(student);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with name " + student.firstName
            });                
        }
        return res.status(500).send({
            message: "Error retrieving student with name " + student.firstName
        });
    });

};
//Create new student object and save to db
//Requires the full student record as part of the request object
exports.addStudent = (req, res) => {
    console.log('Adding Student....');

    //Validate request
    if(!req.body.userId) {
        return res.status(400).send({
            message: "userId"
        });
    }
    //Create a new Student model object
    const student = new studentModel({
        userId: req.body.userId,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        DOB: req.body.dob,
        phoneNumber: req.body.phoneNumber,
        religion: req.body.religion,
        regNumber: req.body.regNumber,
        lastSchool: req.body.lastSchool,
        lastSchoolMarks: req.body.lastSchoolMarks,
        sports: req.body.sports
    });
    //Save Student to the database
    student.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
   
};
//--------------------------------------------------//
//--------------------------------------------------//



//Teacher Functions
//--------------------------------------------------//

//Get all teachers
exports.getAllTeachers = (req, res) => {
    console.log('getting All Teachers');

     teacherModel.find()
    .then(teachers => {
        res.send(teachers);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
};

//Get a single Teacher
//Requires the teacher record id as part of the request object
exports.getTeacher = (req, res) => {
     console.log("Getting a single teacher...");

    teacherModel.findOne(req.params.firstName)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Student not found with name " + student.firstName
            });            
        }
        res.send(data);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with name " + student.firstName
            });                
        }
        return res.status(500).send({
            message: "Error retrieving student with name " + student.firstName
        });
    });
};

//Add a new Teacher
//Requires the teacher record as part of the request object
exports.addTeacher = (req, res) => {
    console.log('Adding Teacher....');

    //Validate request
    if(!req.body.userId) {
        return res.status(400).send({
            message: "userId"
        });
    }
    //Create a new Teacher model object
    const teacher = new teacherModel({
        userId: req.body.userId,
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        secondName: req.body.secondName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        DOB: req.body.dob,
        phoneNumber1: req.body.phoneNumber1,
        phoneNumber2: req.body.phoneNumber2,
        religion: req.body.religion,
        highestDegree: req.body.highestDegree,
        university: req.body.university,
        graduatingYear: req.body.graduatingYear,
        cgpa: req.body.cgpa,
        otherDegrees: req.body.otherDegrees
    });
    //Save TEacher to the database
    teacher.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Teacher"
        });
    });
};
//--------------------------------------------------//
//--------------------------------------------------//



//Add a new Class
//Requires the class info
exports.addClass = (req, res) => {
    console.log('Adding a Class....');

    //Validate request
    if(!req.body.className) {
        return res.status(400).send({
            message: "no class found from request..."
        });
    }
    //Create a new timeSlot model object
    const newClass = new classModel({
        className: req.body.className,
        classCode: req.body.classCode,
        subject: req.body.subject,
        teacher: req.body.teacher,
        classId: req.body.classId,
        description: req.body.description
    });
    //Save Teacher to the database
    newClass.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Class"
        });
    });
};

//Add a new Subject
//Requires the subject info
exports.addSubject =  (req, res) => {
   if(!req.body.subject) {
        return res.status(400).send({
            message: "enter subject name"
        });
    }
    //Create a new timeSlot model object
    const subject = new subjectModel({
        name: req.body.name
    }); 
    newSubject.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "An error occurred while adding subject"
        });
    });
};

//Schedule Class
//Requires the timeSlot record as part of the request object
exports.addTimeSlot = (req, res) => {
    
    console.log('Adding TimeSlot....');

    //Validate request
    if(!req.body.slot) {
        return res.status(400).send({
            message: "no slot found"
        });
    }
    //Create a new timeSlot model object
    const timeSlot = new timeSlotModel({
        day: req.body.day,
        date: req.body.date,
        slot: req.body.slot,
        class: req.body.class,
        subject: req.body.subject,
        teacher: req.body.teacher,
        classRoom: req.body.classRoom,
        isExam: req.body.isExam
    });
    //Save TEacher to the database
    timeSlot.save().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Timeslot"
        });
    });
    
};

//Attendance Functions
//--------------------------------------------------//
//Upload Assignment as file for a single student, for a given assignment
//Requires the student record id and assignment record id as part of the request object
exports.getAttendance = (req, res) => {
    console.log('getting All Attendance');

     attendanceModel.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
};
//--------------------------------------------------//
//--------------------------------------------------//

//Marks Functions
//--------------------------------------------------//
//Get all messages for a single student
//Requires the student record id as part of the request object
exports.getAllMarks = (req, res) => {
    console.log('getting All Marks');

     markModel.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
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
