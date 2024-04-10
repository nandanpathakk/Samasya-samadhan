const mongoose = require("mongoose")

const cleanIssueSchema = mongoose.Schema({
    issueImage: {data: Buffer, contentType: String},
    // issueImage: {type: String, required: true},
    issue: {type: String, required: true},
    issueDesc: {type: String, requires: true},
    issueLevel: {type: String, required: true}
})


const cleanIssueModel = mongoose.model("CleanIssue",cleanIssueSchema);

module.exports = {
    cleanIssueModel,
}