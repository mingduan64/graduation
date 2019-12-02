const db = require("../models");

exports.create = async(req, res, next) => {
    try{
        let createdAboutus = await db.Aboutus.create(req.body.collection);
        return res.status(201).json(createdAboutus);
    } catch(err) {
        return next(err);
    }
}

exports.get = async(req, res, next) => {
    try{
        let listAboutus = await db.Aboutus.find();
        return res.status(200).json(listAboutus);
    } catch(err) {
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try{
        let foundAboutus = await db.Aboutus.findById(req.params.id);

        foundAboutus.carousel_img = req.body.carousel_img;
        foundAboutus.carousel_title = req.body.carousel_title;
        foundAboutus.carousel_content = req.body.carousel_content;
        foundAboutus.body_title = req.body.body_title;
        foundAboutus.body_content = req.body.body_content;
        foundAboutus.icon_title = req.body.icon_title;
        foundAboutus.icon_content = req.body.icon_content;
        foundAboutus.adv_title = req.body.adv_title;
        foundAboutus.adv_content = req.body.adv_content;
        foundAboutus.adv_img = req.body.adv_img;
        foundAboutus.adv_img_title = req.body.adv_img_title;
        foundAboutus.adv_img_content = req.body.adv_img_content;
        foundAboutus.adv_icon_title = req.body.adv_icon_title;
        foundAboutus.adv_icon_content = req.body.adv_icon_content;
        foundAboutus.team_title = req.body.team_title;
        foundAboutus.team_content = req.body.team_content;
        foundAboutus.office_title = req.body.office_title;
        foundAboutus.office_des = req.body.office_des;
        foundAboutus.office_img = req.body.office_img;
        
        
        await foundAboutus.save();
        return res.status(200).json(foundAboutus);
    } catch(err) {
        return next(err);
    }
}

exports.delete = async(req, res, next) =>{
    try {
        let foundAboutus = await db.Aboutus.findOne({_id: req.params.id});
        await foundAboutus.remove();
        return res.status(200).json(foundAboutus);
    } catch(err) {
        return next(err);
    }
}
