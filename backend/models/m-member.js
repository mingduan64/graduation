const mongoose = require("mongoose");

const {cloudinary} = require("../utils/uploader");
const db = require("../models");

const memberSchema=new mongoose.Schema({
    name: [
        {
        type: String
    }
    ],
    title: [
        {
            type: String
        }
    ],
    profileImg: [{
        link: String,
        cloud_id: String
    }],
    desc:[{
        type: String
    }]
})

memberSchema.pre("remove", async function(next){
    try {
        cloudinary.v2.uploader.destroy(this.profileImg.cloud_id);
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("Member", memberSchema);
