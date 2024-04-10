const express = require("express")
const fssaiIssueRouter = express.Router()
const { fssaiIssueModel } = require("../models/fssaiIssueModel");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req,file,cb){
        return cb(null, "./fssaiIssueUploads")
    },
    filename: function (req,file,cb){
        return cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

//for reading data
fssaiIssueRouter.get("/fssaiissue",async(req, res) => {
    const data = await fssaiIssueModel.find({})
    res.json({success: true, data: data})
});

//create or post data
fssaiIssueRouter.post("/fssaiissuecreate",upload.single("issueImage"),async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    const data = new fssaiIssueModel({
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
    fssaiIssueRouter,
}