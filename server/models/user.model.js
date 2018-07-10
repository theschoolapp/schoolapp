const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
		user_id: String,
	    email: String,
	    password: String,
	    accountType: String
	}, 
	{
	    timestamps: true
	});

module.exports = mongoose.model('User', UserSchema);