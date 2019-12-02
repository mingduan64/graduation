const db = require("../models");

exports.create = async(req, res, next) => {
    try{
        let createdContribution = await db.Contribution.create(req.body.collection);
        return res.status(201).json(createdContribution);
    } catch(err) {
        return next(err);
    }
}

exports.get = async(req, res, next) => {
    try{
        let listContribution = await db.Contribution.find().populate("student_id").exec();
        return res.status(200).json(listContribution);
    } catch(err) {
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try{
        let foundContribution = await db.Contribution.findById(req.params.id);

        foundContribution.approveStatus = req.body.approveStatus;
        foundContribution.comment = req.body.comment;
        foundContribution.selectForPublic = req.body.selectForPublic;
        
        await foundContribution.save();
        return res.status(200).json(foundCollection);
    } catch(err) {
        return next(err);
    }
}

exports.delete = async(req, res, next) =>{
    try {
        let foundContri = await db.Contribution.findOne({_id: req.params.id});
        await foundContri.remove();
        return res.status(200).json(foundContri);
    } catch(err) {
        return next(err);
    }
}
