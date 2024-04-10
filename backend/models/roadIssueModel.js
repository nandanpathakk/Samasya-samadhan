const mongoose = require("mongoose")

const roadIssueSchema = mongoose.Schema({
    issueImage: {data: Buffer, contentType: String},
    // issueImage: {type: String, required: true},
    issue: {type: String, required: true},
    issueDesc: {type: String, requires: true},
    issueLevel: {type: String, required: true}
})


const roadIssueModel = mongoose.model("RoadIssue",roadIssueSchema);

module.exports = {
    roadIssueModel,
}