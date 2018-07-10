const mongoose = require('mongoose');

const MarkSchema = mongoose.Schema({
		class: String,
	    courseCode: String,
	    section: String,
	    markType: String,
	    studentId: String,
	    teacherId: String
	    
	}, 
	{
	    timestamps: true
	});

module.exports = mongoose.model('Mark', MarkSchema);