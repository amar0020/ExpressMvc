const mongoose= require("mongoose");


const submissionSchema= mongoose.Schema({
    evaluaion_id:{type:mongoose.Schema.Types.ObjectId, ref:"evaluation",required:true},
    student_id:{type:mongoose.Schema.Types.ObjectId, ref:"student", required:true},
    marks:{type:Number,required:true},
},
{
    timestamps:true
})


const Submission = mongoose.model("submission",submissionSchema);

module.exports= Submission;