const mongoose=require('mongoose')
const { Schema } = mongoose;
const userShema=new Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    role:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        default:Date.now
    }

})

module.exports=mongoose.model('user',userShema)