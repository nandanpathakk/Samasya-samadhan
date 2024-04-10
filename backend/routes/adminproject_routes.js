const express = require("express");
const adminprojectRouter = express.Router();
const { adminprojectModel } = require("../models/adminprojectModel");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "./adminProjectUploads");
    },
    filename: function (req, file, cb) {
        return cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage });

// Read data
adminprojectRouter.get("/adminproject", async (req, res) => {
    try {
        const data = await adminprojectModel.find({});
        res.json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// Create or post data
adminprojectRouter.post("/adminprojectcreate", upload.single("issueImage"), async (req, res) => {
    try {
        console.log(req.body);
        console.log(req.file);
        const data = new adminprojectModel({
            projectImage: {
                data: req.file.filename,
                contenType: "image"
            },
            project: req.body.project,
            projectDesc: req.body.projectDesc
        });
        await data.save();
        res.status(201).send({ success: true, message: "data saved successfully" });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
});

// Handle voting data
adminprojectRouter.post("/adminprojectvote", async (req, res) => {
    try {
        // Logic to handle voting data
        res.status(200).send({ success: true, message: "vote recorded successfully" });
    } catch (error) {
        res.status(400).send({ success: false, message: error.message });
    }
});

module.exports = {
    adminprojectRouter,
};
