const mongoose = require('mongoose');
const db = require("../models");
const {spliceId} = require("../utils/dbSupport");

// Define Schema
const hcarouselSchema = new mongoose.Schema({
    hcarousel_id: {
        type: mongoose.Schema.Types.ObjectId
    },
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Hcarousel', hcarouselSchema)
