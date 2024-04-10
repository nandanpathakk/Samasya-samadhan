const mongoose = require("mongoose")

const adminprojectSchema = mongoose.Schema({
    projectImage: {data: Buffer, contentType: String},
    // issueImage: {type: String, required: true},
    project: {type: String, required: true},
    projectDesc: {type: String, required: true},
})


const adminprojectModel = mongoose.model("AdminProject",adminprojectSchema);

module.exports = {
    adminprojectModel,
}