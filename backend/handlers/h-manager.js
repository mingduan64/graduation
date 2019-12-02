const db = require("../models");

exports.create = async(req, res, next) => {
    try{
        let {count, createdAcc} = req.body;
        for(let acc of createdAcc){
            let foundRole = await db.Role.findOne({code: "004"});
            let createdUserRole = await db.UserRole.create({
                user_id: acc._id,
                role_id: foundRole._id,
                onModel: "Manager"
            });
        }
        let msg = count === 0 ? "All provided emails are valid and processed successfully" : `${count} email is taken and can't be processed`;
        return res.status(200).json({createdAcc, msg, count});
    } catch(err) {
        return next(err);
    }
}
