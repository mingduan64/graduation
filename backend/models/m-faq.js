const mongoose = require("mongoose");
const db = require("../models");
const {spliceId, casadeDeleteMany} = require("../utils/dbSupport");

const faqSchema = new mongoose.Schema({    
    carousel_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
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
    ],
    quiz_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ],
    quiz_title:[
        {
            type: String
        }
    ],
    answer_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Image"
        }
    ],
    answer_content:[
        {
            type: String
        }
    ]
});

faqSchema.pre("remove", async function(next){
    try {
        await casadeDeleteMany("Image", this.image_id);
        
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("FAQ", faqSchema);
