const express = require("express")
const cleanprogramRouter = express.Router()
const { cleanprogramModel } = require("../models/cleanprogramModel");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null, "./cleanProgramUploads")
    },
    filename: function (req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

//for reading data
cleanprogramRouter.get("/cleanprogram",async(req, res) => {
    const data = await cleanprogramModel.find({})
    res.json({success: true, data: data})
});

//create or post data
cleanprogramRouter.post("/cleanprogramcreate",upload.single("Image"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const data = new cleanprogramModel({
        Image: {
            data: req.file.filename,
            contenType: "image"
        },
        titel: req.body.title,
        desc: req.body.desc
    })
    await data.save()
    res.send({
        success: true, message: "data saved successfully"
    })
})

module.exports = {
    cleanprogramRouter,
}