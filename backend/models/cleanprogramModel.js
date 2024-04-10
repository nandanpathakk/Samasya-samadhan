const mongoose = require("mongoose")

const cleanprogramSchema = mongoose.Schema({
    Image: {data: Buffer, contentType: String},
    // issueImage: {type: String, required: true},
    title: {type: String, required: true},
    desc: {type: String, requires: true}
})


const cleanprogramModel = mongoose.model("CleanProgram",cleanprogramSchema);

module.exports = {
    cleanprogramModel,
}