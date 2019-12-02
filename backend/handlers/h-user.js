const db = require("../models");
const {genToken} = require("../utils/token")
var jwt = require('jsonwebtoken');  
var User = require('../models/m-user');

exports.register = async(req, res, next) => {
    try{
        let createduser = await db.User.create({
            fullname: req.body.fullname,
            email: req.body.email,
            password: req.body.password,
            role: 'client'
             });
            await createduser.save();
        return res.status(201).json(createduser);
    } catch(err) {
        return next(err);
    }
}