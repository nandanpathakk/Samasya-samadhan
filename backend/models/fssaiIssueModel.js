const mongoose = require("mongoose")

const fssaiIssueSchema = mongoose.Schema({
    issueImage: {data: Buffer, contentType: String},
    // issueImage: {type: String, required: true},
    issue: {type: String, required: true},
    issueDesc: {type: String, requires: true},
    issueLevel: {type: String, required: true}
})


const fssaiIssueModel = mongoose.model("FssaiIssue",fssaiIssueSchema);

module.exports = {
    fssaiIssueModel,
}