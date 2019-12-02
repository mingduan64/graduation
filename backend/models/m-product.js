const mongoose = require("mongoose");
const db = require("../models");
const {spliceId, casadeDeleteMany} = require("../utils/dbSupport");

const productSchema = new mongoose.Schema({    
    category_id:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category"
        }
    ],
    product_img:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        },

    ],
    product_title:[
        {
            type: String
        }
    ],
    product_content:[
        {
            type: String
        }
    ],
    quantity:[
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

productSchema.pre("remove", async function(next){
    try {
        await casadeDeleteMany("Image", this.image_id);
        await spliceId("Category", this.category_id, "product_id");
        return next();
    } catch(err) {
        return next(err);
    }
})

module.exports = mongoose.model("Product", productSchema);
