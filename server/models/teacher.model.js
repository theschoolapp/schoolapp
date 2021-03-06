const mongoose = require('mongoose');

const TeacherSchema = mongoose.Schema({
		userId: String,
	    email: String,
	    password: String,
	    firstName: String,
	    secondName: String,
	    lastName: String,
	    gender: String,
	    DOB: Date,
	    phoneNumber1: String,
	    phoneNumber2: String,
	    religion: String,
	    highestDegree: String,
	    university: String,
	    graduatingYear: Number,
	    cgpa: String,
	    otherDegrees: Array
	    
	}, 
	{
	    timestamps: true
	});

module.exports = mongoose.model('Teacher', TeacherSchema);