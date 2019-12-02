const db = require("../models");

exports.create = async(req, res, next) => {
    try{
        let {count, createdAcc, faculty} = req.body;
        for(let acc of createdAcc){
            //add role to acc
            let foundRole = await db.Role.findOne({code: "001"});
            let createdUserRole = await db.UserRole.create({
                user_id: acc._id,
                role_id: foundRole._id,
                onModel: "Student"
            });
            let foundFaculty = await db.Faculty.findById(acc.faculty_id);
            foundFaculty.student_id.push(acc._id);
            await foundFaculty.save();
        }
        let msg = count === 0 ? "All provided emails are valid and processed successfully" : `${count} email is taken and can't be processed`;
        return res.status(200).json({createdAcc, msg, count});
    } catch(err) {
        return next(err);
    }
}

exports.get = async(req, res, next) => {
    try {
        let students = await db.Student.find({ready: true}).populate("faculty_id").exec();
        return res.status(200).json(students);
    } catch(err) {
        return next(err);
    }
}

exports.getUnready = async(req, res, next) => {
    try {
        let students = await db.Student.find({ready: false}).populate("faculty_id").exec();
        return res.status(200).json(students);
    } catch(err) {
        return next(err);
    }
}

exports.delete = async(req, res, next) => {
    try {
        let foundStudent = await db.Student.findById(req.params.student_id);
        await foundStudent.remove();
        return res.status(200).json(foundStudent);
    } catch(err) {
        return next(err);
    }
}
