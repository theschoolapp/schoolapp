const mongoose = require('mongoose');

const StudentScema = mongoose.Schema({
		user_id: String,
	    email: String,
	    password: String,
	    firstName: String,
	    secondName: String,
	    lastName: String,
	    gender: String,
	    DOB: Date,
	    phoneNumber: String,
	    religion: String,
	    regNumber: String,
	    lastSchool: String,
	    lastSchoolMarks: Number,
	    sports: Array
	}, 
	{
	    timestamps: true
	});

module.exports = mongoose.model('Student', StudentSchema);
