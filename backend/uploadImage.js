var cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "dbmwoxq85",
    api_key: "794475284299656",
    api_secret: "xtXGQjejmNdX135P_7gqa-3P2jY"
})

const opts = {
    overwrite: true,
    invalidate: true,
    resource_type: "auto"
}

module.exports = (image) =>{
    return new Promise((resolve,reject)=>{
        cloudinary.uploader.upload(image,opts,(error,result) =>{
            if(result && result.secure_url){
                console.log(result.secure_url)
                return resolve(result.secure_url)
            }
            console.log(error.message)
            return reject({ message: error.message})
        })
    })
}