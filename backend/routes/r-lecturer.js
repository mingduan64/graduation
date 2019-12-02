const express = require("express");
const hdl = require("../handlers");
const mw = require("../middleware");
const router = express.Router({mergeParams: true});

router.route("/").get(hdl.Lecturer.get);

router.use("/:lecturer_id/students", require("./r-student"));

router.route("/unready").get(hdl.Lecturer.getUnready);

module.exports = router;
