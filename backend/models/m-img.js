const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Schema
const imgSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  img: {
    type: String
  },
})

module.exports = mongoose.model('Img', imgSchema)
