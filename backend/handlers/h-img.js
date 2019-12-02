const db = require("../models");

exports.create = async(req, res, next) => {
    try {
        let newImg = await db.Img.create(req.body.img);
        await db.Img.save(req.body.img)
        return res.status(200).json(newImg);
    } catch(err) {
        return next(err);
    }
}

exports.get = async(req, res, next) => {
    try {
        let listImage = await db.Img.find();
        return res.status(200).json(listImage);
    } catch(err){
        return next(err);
    }
}

exports.delete = async(req, res, next) => {
    try {
        let foundImage = await db.Img.findOne({_id: req.params.id});
        await foundImage.remove();
        return res.status(200).json(foundImage);
    } catch(err) {
        return next(err);
    }
}
