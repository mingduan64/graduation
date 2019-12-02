const mongoose = require("mongoose");
const db = require("../models");
const {spliceId, casadeDeleteMany} = require("../utils/dbSupport");

const blogSchema = new mongoose.Schema({    
    blogcategory_id:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "BlogCategory"
        }
    ],
    blog_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        },

    ],
    blog_title:[
        {
            type: String
        }
    ],
    blog_content:[
        {
            type: String
        }
    ]
    
});

blogSchema.pre("remove", async function(next){
    try {
        await casadeDeleteMany("Image", this.image_id);
        await spliceId("BlogCategory", this.blogcategory_id, "blog_id");
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("Blog", blogSchema);
