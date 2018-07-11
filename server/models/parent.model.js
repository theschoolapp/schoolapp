const mongoose = require('mongoose');

const ParentSchema = mongoose.Schema({
		userId: String,
	    email: String,
	    password: String,
	    firstName: String,
	    secondName: String,
	    lastName: String,
	    gender: String,
	    phoneNumber1: String,
	    phoneNumber2: String,
	    religion: String,
	    nationality: String,
	    address: String,
	    country: Number,
	    studentIds: Array
	    
	}, 
	{
	    timestamps: true
	});

module.exports = mongoose.model('Parent', ParentSchema);