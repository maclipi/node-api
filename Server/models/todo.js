var mongoose = require('mongoose');


var Todo = mongoose.model('Todos',{

    text: {
        type:String,
        required:true,
        minlength:2,
        trim:true
    },
    mobile : {
        type: Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }

});

module.exports = {Todo};