const mongoose = require('mongoose');

const SubjectSchema = mongoose.Schema({
		name: String
	   
	    
	}, 
	{
	    timestamps: true
	});

module.exports = mongoose.model('Subject', SubjectSchema);