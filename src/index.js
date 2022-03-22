const express = require("express");

const mongoose = require("mongoose");

const userController = require("./controller/user.controller");

const studentController = require("./controller/student.controller")

const submissionController = require("./controller/submission.controller")

const app= express()


app.use("/user",userController)

app.use("/student",studentController);


app.use("/submission",submissionController)

















app.post("/user", async (req,res)=>{
    try{
        var data= Student.create(req.body)
        res.send(data)
    }
    catch(err){
        console.log(err.message)
    }
})

















module.exports=app



