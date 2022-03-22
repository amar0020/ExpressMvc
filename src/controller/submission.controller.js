const express = require("express");
const req = require("express/lib/request");

const Submission= require("../model/submission.model")

const router = express.Router();


router.post("", async (req,res)=>{
    try{
        var data= Submission.create(req.body)
        res.send(data)
    }
    catch(err){
        console.log(err.message)
    }
});

router.get("/:id", async (req,res)=>{
    const data = await Submission.findById(req.params.id).populate({path:"student"});
    res.send(data.student_id)
})

router.get("", async (req,res)=>{
    const data = await Submission.find({}).sort({marks:-1}).limit(1).populate({path:"student",select:"student_id", populate:{path:"userId"}});
    res.send(data.student_id.userId)
})


module.exports = router
