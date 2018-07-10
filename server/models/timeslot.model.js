const mongoose = require('mongoose');

const TimeSlotSchema = mongoose.Schema({
		day: String,
	    date: Date,
	    slot: String,
	    class: String,
	    subject: String,
	    teacher: String,
	    classRoom: String,
	    isExam: Boolean
	    
	}, 
	{
	    timestamps: true
	});

module.exports = mongoose.model('TimeSlot', TimeSlotSchema);