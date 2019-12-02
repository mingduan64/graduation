const express = require("express");
const hdl = require("../handlers");
const router = express.Router({mergeParams: true});

router.route("/student").post(hdl.Student.create);

router.route("/lecturer").post(hdl.Lecturer.create);

router.route("/coordinator").post(hdl.Coordinator.create);

router.route("/manager").post(hdl.Manager.create);

module.exports = router;
