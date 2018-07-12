var mongoose =  require('mongoose');

var ClassSchema = mongoose.Schema({

    classs_name:{
        type:String 
    },
    class_code:{
       type:String
    },
    subject:{
           type:String
    },
    teacher:{
        type:String
    },
    class_id:{
        type:String
    },
    description:{
        type:String
    }
})
const Class = module.exports = mongoose.model('Class',ClassSchema)

