const mongoose = require("mongoose");
const db = require("../models");
const {spliceId, casadeDeleteMany} = require("../utils/dbSupport");

const carouselSchema = new mongoose.Schema({    
    carousel_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Img"
        },

    ],
    carousel_title:[
        {
            type: String
        }
    ],
    carousel_content:[
        {
            type: String
        }
    ]
    
});

carouselSchema.pre("remove", async function(next){
    try {
        await casadeDeleteMany("Image", this.image_id);
        
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("Carousel", carouselSchema);
