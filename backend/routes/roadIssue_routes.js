const express = require("express")
const roadIssueRouter = express.Router()
const { roadIssueModel } = require("../models/roadIssueModel");
const multer = require("multer");
const uploadImage = require("../uploadImage");

roadIssueRouter.get("/roadissue",async(req, res) => {
    const data = await roadIssueModel.find({})
    res.json({success: true, data: data})
});

roadIssueRouter.post("/roadissuecreate", async(req,res)=>{
    uploadImage(req.body.image)
        .then((url)=> res.send(url))
        .catch((err)=> res.status(500).send(err))
    console.log(req.body)
    // console.log(req.file)
    const data = new roadIssueModel({
        // issueImage: {
        //     data: req.file.filename,
        //     contenType: "image"
        // },
        issue: req.body.issue,
        issueDesc: req.body.issueDesc,
        issueLevel: req.body.issueLevel
    })
    await data.save()
    res.send({
        success: true, message: "data saved successfully"
    })   
})

// const storage = multer.diskStorage({
//     destination: function (req,file,cb){
//         return cb(null, "./roadIssueUploads")
//     },
//     filename: function (req,file,cb){
//         return cb(null, `${Date.now()}-${file.originalname}`)
//     }
// })

// const upload = multer({ storage })

// //for reading data
// roadIssueRouter.get("/roadissue",async(req, res) => {
//     const data = await roadIssueModel.find({})
//     res.json({success: true, data: data})
// });

// //create or post data
// roadIssueRouter.post("/roadissuecreate",upload.single("issueImage"),async(req,res)=>{
    // console.log(req.body)
    // console.log(req.file)
    // const data = new roadIssueModel({
    //     issueImage: {
    //         data: req.file.filename,
    //         contenType: "image"
    //     },
    //     issue: req.body.issue,
    //     issueDesc: req.body.issueDesc,
    //     issueLevel: req.body.issueLevel
    // })
    // await data.save()
    // res.send({
    //     success: true, message: "data saved successfully"
    // })
// })

module.exports = {
    roadIssueRouter,
}