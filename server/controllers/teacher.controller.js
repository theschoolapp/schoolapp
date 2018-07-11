const teacher =  require('../models/teacher.model')
const mark  = require('../models/mark.model')
const  student = require('../models/student.model')
const timeslot  = require('../models/timeslot.model')
//CREATE TEACHER

 //find all teachers
 exports.findTeacher = async (req,res)=>{
  
  try {
    const matches = await teacher.find({})
    res.status(200).json({
      message: 'Success',
      matches
    })
  } catch (error) {
    res.json({
      message: error.message || 'Something terrible happened'
    })
  }
 }
//find by add marks
 exports.addMarks = async(req, res)=>{
 

   
   try {
    let marks = req.body // the body include the student-id which will be used to  update the  marks

     res.status(200).json({
      message: 'added marks', 
      teacher: marks 
    })
  } catch (error) {
    console.log(error)
    res.status(error.code).json({
      message: error.message || 'Something happened and we could not add marks'
    })
  }
  
 }

//adding assignment
// file upload to be added using multer
 exports.addassignment = async (req, res)=>{
   
  try {
   const marks = req.body
    res.status(200).json({
     message: 'added assignment', 
     teacher: marks 
   })
 } catch (error) {
   console.log(error)
   res.status(error.code).json({
     message: error.message || 'Something happened and we could not add asssigment'
   })
 }
 
}

//teacher add attendence of a student
exports.addattendence = async (req, res)=>{
   
  try {
   const attendnce = req.body

   //add attendence to students using student id or name
   ////
   //
   //
   //
   //
   
    res.status(200).json({
     message: 'added attendence', 
     teacher: attendnce
   })
 } catch (error) {
   console.log(error)
   res.status(error.code).json({
     message: error.message || 'Something happened and we could not add attendence'
   })
 }
 
}

//getMarks
exports.getmarks = async (req ,res) =>{
  let marks = mark.find({})
}

//get attendence  of student
exports.getAttendence = async(req, res) =>{
let attendence = attendence.findById({})
}


//get time table for the teacher
exports.getTimeTableClass = async(req , res) =>{
  let timetable = timeslot.find({})
}

//get time table for the teacher
exports.getTimeTableExam = async(req , res) =>{
  let timetable = timeslot.find({})
}