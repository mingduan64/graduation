const db = require("../models");

exports.create = async(req, res, next) => {
    try{
        let createdCollection = await db.Collection.create(req.body.collection);
        return res.status(201).json(createdCollection);
    } catch(err) {
        return next(err);
    }
}

exports.get = async(req, res, next) => {
    try {
        let listCollection = await db.Collection.find().populate("contribution_id").exec();
        return res.status(200).json(listCollection);
    } catch(err) {
        return next(err);
    }
}

exports.delete = async (req, res, next) =>{
    try {
        let foundCollection = await db.Collection.findOne({_id: req.params.id});
        await foundCollection.remove();
        return res.status(200).json({foundCollection});
    } catch(err) {
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try{
        let foundCollection = await db.Collection.findById(req.params.id);

        foundCollection.title = req.body.title;
        foundCollection.description = req.body.description;
        foundCollection.closureDate = req.body.closureDate;
        foundCollection.finalClosureDate = req.body.finalClosureDate;
        foundCollection.exceptionReport_id = req.body.exceptionReport_id;
        foundCollection.contribution_id = req.body.contribution_id;
        foundCollection.faculty_id = req.body.faculty_id;

        await foundCollection.save();
        return res.status(200).json(foundCollection);
    } catch(err) {
        return next(err);
    }
}
