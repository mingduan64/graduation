const mongoose = require('mongoose');
const db = require("../models");
const bcrypt = require('bcrypt');
const Img = require('../models/m-img');
const {spliceId} = require("../utils/dbSupport");

// Define Schema
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
      },
    /*img: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Img' }], */
    email: {
        type: String,
        required: true,
        unique: true,
        // Regexp to validate emails with more strict rules as added in tests/users.js which also conforms mostly with RFC2822 guide lines
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
      },
      password: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      role: [{
        type: String,
        enum: ['admin', 'client'],
        default: 'client'
      }]
    });

  /*  userSchema.pre('save', function (next) {
      var user = this;
      if (this.isModified('password') || this.isNew) {
          bcrypt.genSalt(10, function (err, salt) {
              if (err) {
                  return next(err);
              }
              bcrypt.hash(user.password, salt, null, function (err, hash) {
                  if (err) {
                      return next(err);
                  }
                  user.password = hash;
                  next();
              });
          });
      } else {
          return next();
      }
  });  */
  

  
 
const User = module.exports = mongoose.model('User', userSchema)
module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) throw err;
        newUser.password = hash;
        newUser.save(callback);
      });
    });
  }
  module.exports.getUserByEmail = function(email, callback){
    const query = {email: email}
    User.findOne(query, callback);
  }
  module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
     
      callback(null, isMatch);
    });
  }
  module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
  }