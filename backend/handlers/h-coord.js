const db = require("../models");

exports.create = async(req, res, next) => {
    try{
        let {count, createdAcc} = req.body;
        for(let acc of createdAcc){
            //add role to acc
            let foundRole = await db.Role.findOne({code: "003"});
            let createdUserRole = await db.UserRole.create({
                user_id: acc._id,
                role_id: foundRole._id,
                onModel: "Coordinator"
            });
        }
        let msg = count === 0 ? "All provided emails are valid and processed successfully" : `${count} email is taken and can't be processed`;
        return res.status(200).json({createdAcc, msg, count});
    } catch(err) {
        return next(err);
    }
}

exports.get = async(req, res, next) => {
    try {
        let coordinators = await db.Coordinator.find();
        let activeCoor = coordinators.filter(coor => coor.viewname !== "");
        return res.status(200).json(activeCoor);
    } catch(err) {
        return next(err);
    }
}

exports.getUnready = async(req, res, next) => {
    try {
        let coord = await db.Coordinator.find({ready: false}).populate("faculty_id").exec();
        return res.status(200).json(coord);
    } catch(err) {
        return next(err);
    }
}