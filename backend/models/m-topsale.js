const mongoose = require("mongoose");
const db = require("../models");
const {spliceId, casadeDeleteMany} = require("../utils/dbSupport");

const topsaleSchema = new mongoose.Schema({    
    category_id:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        }
    ],
    topsale_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        },

    ],
    topsale_title:[
        {
            type: String
        }
    ],
    topsale_content:[
        {
            type: String
        }
    ],
    price:[
        {
            type: String
        }
    ]
    
});

topsaleSchema.pre("remove", async function(next){
    try {
        await casadeDeleteMany("Image", this.image_id);
        await spliceId("Category", this.category_id, "topsale_id");
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("Topsale", topsaleSchema);
