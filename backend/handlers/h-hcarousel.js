const db = require ('../models');
exports.create = async(req, res, next) => {
    try{
        let createdcarousel = await db.Hcarousel.create({
            img: req.body.img,
            title: req.body.title,
            decription: req.body.decription,
             });
            await db.Hcarousel.createdcarousel.save();
        return res.status(201).json(createdcarousel);
    } catch(err) {
        return next(err);
    }
}



exports.get = async(req, res, next) => {
    try {
        let listCa = await db.Hcarousel.find();
        return res.status(200).json(listCa);
    } catch(err){
        return next(err);
    }
}
exports.getOne = async(req, res, next) => {
    try{
        let ca = await db.Hcarousel.findById(req.params.hcarousel_id);
        return res.status(200).json(ca);
    } catch (err) {
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try{
        let foundCa = await db.Hcarousel.findById(req.params.hcarousel_id);
        foundCa.img = req.body.img;
        foundCa.title = req.body.title;
        foundCa.decription = req.body.decription,
        foundCa.Date = Date.now 

        await foundCa.save();
        return res.status(200).json(foundCa);
    } catch(err) {
        return next(err);
    }
}
exports.delete = async(req, res, next) => {
    try {
        let foundCa = await db.Cat.findById(req.params.hcarousel_id);
        await foundCa.remove();
        return res.status(200).json(foundCa);
    } catch(err) {
        return next(err);
    }
}
