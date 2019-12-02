const express = require("express");
const hdl = require("../handlers");
const router = express.Router({mergeParams: true});
const upload = require("../utils/uploader");
const Img = require ('../models')
router.post('/create', upload.single('file'), (req, res, next) => {
  file = req.file
  const url = req.protocol + '://' + req.get('host')
  const img = new Img({
    _id: new mongoose.Types.ObjectId(),
    img: url + "/images/" + file.filename
  });
  img.save().then(result => {
    console.log(result);
    res.status(201).json({
      message: "Done upload!",
      imgCreated: {
        _id: result._id,
        img: result.img
      }
    })
  }).catch(err => {
    console.log(err),
      res.status(500).json({
        error: err
      });
  })
}) 

//router.route("/create", upload.array("img"))
//.post(hdl.Img.create);
router.route("/")
.get(hdl.Img.get);
router.route("/:img_id")
.delete(hdl.Img.delete);

module.exports = router;
