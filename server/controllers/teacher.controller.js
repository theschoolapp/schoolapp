const teacher =  require('../models/teacher.model')

//CREATE TEACHER
 exports.createTeacher = async function(req,res){

    try {
        const newTeacher = await teacher(req.body).save()
        res.status(200).json({
          message: 'Successfully created a new teacher',
          teacher: newTeacher
        })
      } catch (error) {
        console.log(error)
        res.status(error.code === 11000 ? 409 : 500).json({
          message: error.message || 'Something happened and we could not create teacher'
        })
      }
 }
 //find all teachers
 exports.findTeacher = async function(req,res){
  
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
//find by id
 module.exports.findbyId = function(){
  
 }