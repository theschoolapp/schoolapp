const mongoose = require('mongoose');

const TeacherScema = mongoose.Schema({
		user_id: String,
	    email: String,
	    password: String,
	    firstName: String,
	    secondName: String,
	    lastName: String,
	    gender: String,
	    DOB: Date,
	    phoneNumber_1: String,
	    phoneNumber_2: String,
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