const express = require("express");
const router = express.Router({mergeParams: true});
const hdl = require("../handlers");
const multer =require('multer');
const filename = require('../utils/uploader');
const upload = require ("../utils/uploader");
const Hcarousel = require("../models/m-hcarousel")
const db = require("../models")
//const storage =require("../utils/uploader")
const mongoose = require ('mongoose')
const path = require('path');
router.route("")
.get(hdl.HCarousel.get);

//router.route("/create_hcarousel")
//.post(hdl.HCarousel.create);

router.route(":hcarousel_id/update")
.put(hdl.HCarousel.update);

router.route("/:hcarousel_id")
.delete(hdl.HCarousel.delete);

router.use("/:hcarousel_id/img", require("./r-img")); 

  router.post('/create', upload.single('file'), (req, res, next) => {
    file = req.file
    const url = req.protocol + '://' + req.get('host')
    
  
    const hca = new Hcarousel({
      _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      description: req.body.description,
      img: url + "/images/" + file.filename
    });
    hca.save().then(result => {
      console.log(result);
      res.status(201).json({
        message: "Done upload!",
        hcaCreated: {
          _id: result._id,
          title: result.title,
          description: result.description,
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

  router.put(
    "/:id",
    upload.single("file"),
    (req, res, next) => {
      file = req.file
      let img = req.body.img;
      if (req.file) {
        const url = req.protocol + "://" + req.get("host");
        img = url + "/images/" + req.file.filename
        //fs.unlinkSync(imagePath);
      }
     // await unlinkAsync(req.file.filename)
      const hca = new Hcarousel({
        _id: req.body.id,
        title: req.body.title,
        content: req.body.content,
        img: url + "/images/" + file.filename
      });
      console.log(hca);
      Hcarousel.updateOne({ _id: req.params.id }, post).then(result => {
        res.status(200).json({ message: "Update successful!" });
      });
    }
  );

  
 
module.exports = router;
