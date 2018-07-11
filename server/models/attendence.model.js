const mongoose = require('mongoose');

const attendenceSchema = mongoose.Schema({
    
      attend:{
          type:String
      },
});

module.exports = mongoose.model('attendence', attendenceSchema);