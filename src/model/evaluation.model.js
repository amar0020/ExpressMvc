const mongoose = require("mongoose");

const evaluationSchema= mongoose.Schema({
    data_of_evaluation:{type:String,require:true},
    instructor:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true},
    batchId:{type:mongoose.Schema.Types.ObjectId, required:true,ref:"batch"}
})

const Evaluation = mongoose.model("evaluation",evaluationSchema)

module.exports= Evaluation;