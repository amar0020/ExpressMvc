const express= require("express")

const router = express.Router();



router.post("", async (req,res)=>{
    try{
        var data= User.create(req.body)
        res.send(data)
    }
    catch(err){
        console.log(err.message)
    }
})


module.export= router
