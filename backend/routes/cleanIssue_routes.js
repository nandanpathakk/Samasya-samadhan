const express = require("express")
const cleanIssueRouter = express.Router()
const { cleanIssueModel } = require("../models/cleanIssueModel");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null, "./cleanIssueUploads")
    },
    filename: function (req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

//for reading data
cleanIssueRouter.get("/cleanissue",async(req, res) => {
    const data = await cleanIssueModel.find({})
    res.json({success: true, data: data})
});

//create or post data
cleanIssueRouter.post("/cleanissuecreate",upload.single("issueImage"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const data = new cleanIssueModel({
        issueImage: {
            data: req.file.filename,
            contenType: "image"
        },
        issue: req.body.issue,
        issueDesc: req.body.issueDesc,
        issueLevel: req.body.issueLevel
    })
    await data.save()
    res.send({
        success: true, message: "data saved successfully"
    })
})

module.exports = {
    cleanIssueRouter,
}