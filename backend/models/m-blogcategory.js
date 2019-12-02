const mongoose = require("mongoose");
const db = require("../models");
const {spliceId, casadeDeleteMany} = require("../utils/dbSupport");

const blogCategorySchema = new mongoose.Schema({  
    blogcate_name:[
        {
            type: String
        }
    ],  
    blogcate_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        },

    ],
    blogcate_title:[
        {
            type: String
        }
    ],
    blogcate_content:[
        {
            type: String
        }
    ]
    
});

blogCategorySchema.pre("remove", async function(next){
    try {
        await casadeDeleteMany("Image", this.image_id);
        
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("BlogCategory", blogCategorySchema);
