const express = require("express");

const router = express.Router()


router.post("", async (req,res)=>{
    try{
        var data= Student.create(req.body)
        res.send(data)
    }
    catch(err){
        console.log(err.message)
    }
})


module.exports = router