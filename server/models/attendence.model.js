const mongoose = require('mongoose');

const attendenceSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'student'
      },
      attend:{
          type:String
      },
});

module.exports = mongoose.model('attendence', attendenceSchema);