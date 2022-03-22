const mongoose = require("mongosoe");


const userSchema =  new mongoose.Schema({
    firstName:{type:String,required:true},
    LastName:{type:String,required:true},
    gender:{type:String, required:true},
    dateOfBirth:{type:String, required:true},
    type:{type:String, required:true}
},
{
    timestamps:true
})

const User = mongoose.model("user",userSchema);

module.exports=User