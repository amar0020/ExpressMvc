const mongoose=require("mongoose");

const studentSchema= new mongoose.Schema({
    roll_id:{type:String, required:true},
    currentbatch:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId, ref:"user", required:true}
},
{
    timestamps:true
})

const Student = mongoose.model("student",studentSchema);

module.exports=Student
