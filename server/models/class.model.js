var mongoose =  require('mongoose');

var ClassSchema = mongoose.Schema({

    classsName:{
        type:String 
    },
    classCode:{
       type:String
    },
    subject:{
           type:String
    },
    teacher:{
        type:String
    },
    classId:{
        type:String
    },
    description:{
        type:String
    }
})
const Class = module.exports = mongoose.model('Class',ClassSchema)

