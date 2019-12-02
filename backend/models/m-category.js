const mongoose = require("mongoose");
const db = require("../models");
const {spliceId, casadeDeleteMany} = require("../utils/dbSupport");

const categorySchema = new mongoose.Schema({    
    catergory_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        },

    ],
    category_title:[
        {
            type: String
        }
    ],
    category_content:[
        {
            type: String
        }
    ]
    
});

categorySchema.pre("remove", async function(next){
    try {
        await casadeDeleteMany("Image", this.image_id);
        
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("Category", categorySchema);
