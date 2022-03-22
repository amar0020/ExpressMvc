const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
    batchName:{type:String,required:true}
},
{
    timestamps:true
})

const Batch = mongoose.model("batch",batchSchema);

module.exports=Batch