const mongoose = require("mongoose");
const db = require("../models");
const {spliceId, casadeDeleteMany} = require("../utils/dbSupport");

const aboutusSchema = new mongoose.Schema({    
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
    body_title:[
        {
            type: String
        }
    ],
    body_content:[
        {
            type: String
        }
    ],
    icon_title:[
        {
            type: String
        }
    ],
    icon_content:[
        {
            type: String
    }      
    ],
    adv_title:[
        {
            type: String
        }
    ],
    adv_content:[
        {
            type: String
        }
    ],
    adv_img:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Image"

        }
    ],
    adv_img_title:[
        {
            type: String
        }
    ],
    adv_img_content:[
        {
            type: String
        }
    ],
    adv_icon_title:[
        {
            type: String
        }
    ],
    adv_icon_content:[
        {
            type: String
        }
    ],
    team_title:[
        {
            type: String
        }
    ],
    team_content:[
        {
            type: String
        }
    ],
    member_id: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Member"
        }
    ],
    office_title:[
        {
            type: String
        }
    ],
    office_des:[
        {
            type: String
        }
    ],
    office_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ]
    
});

aboutusSchema.pre("remove", async function(next){
    try {
        await casadeDeleteMany("Image", this.image_id);
        await spliceId("Member", this.member_id, "aboutus_id");
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("Aboutus", aboutusSchema);
