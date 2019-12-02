const db = require("../models");

exports.create = async(req, res, next) => {
    try{
        let newFaculty = await db.Faculty.create(req.body.faculty);
        return res.status(200).json(newFaculty);
    }catch(err) {
        return next(err);
    }
}

exports.get = async(req, res, next) => {
    try{
        let listFaculty = await db.Faculty.find();
        return res.status(200).json(listFaculty);
    }catch(err){
        return next(err);
    }
}

exports.delete = async (req, res, next) =>{
    try{
        let foundFaculty = await db.Faculty.findOne({_id: req.params.id});
        await foundFaculty.remove();
        return res.status(200).json(foundFaculty);
    } catch(err) {
        return next(err);
    }
}

exports.update = async(req, res, next) => {
    try {
        let foundFaculty = await db.Faculty.findById(req.params.id);

        foundFaculty.student_id = req.body.student_id;
        foundFaculty.lecturer_id = req.body.lecturer_id;
        foundFaculty.collection_id = req.body.collection_id;
        foundFaculty.statistic_id = req.body.statistic_id;
        foundFaculty.name = req.body.name;
        foundFaculty.desc = req.body.desc;

        await foundFaculty.save();
        return res.status.json(foundFaculty);
    } catch(err) {
        return next(err);
    }
}
