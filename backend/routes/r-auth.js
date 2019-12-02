const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/setting');
const User = require('../models/m-user');
const Product = require('../models/m-product');
const hdl = require ('../handlers')
const db = require('../models')

// Register
//router.route("/register").post(hdl.User.register)
router.post('/register', (req, res, next) => {
  let newUser = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
    role: 'client'
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
   
      res.json({
        success: false,
        msg: 'Failed to register user'
      });
    } else {
      res.json({
        success: true,
        msg: 'User registered'
      });
    }
  });
}); 

// Authenticate
router.post('/authenticate', (req, res, next) => {
  console.log('efw')
  const email = req.body.email;
  const password = req.body.password;
  
  

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'User not found'
      });
    }
    
    User.comparePassword(password, user.password, (err, isMatch) => {

      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({
          data: user
        }, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            fullname: user.fullname,
            email: user.email,
            role: user.role
          }
        });
      } else {
        return res.json({
          success: false,
          msg: 'Wrong password'
        });
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  res.json({
    user: req.user
  });
});


//Product rereive
router.get('/product', (req, res, next) => {
  Product.find(function (err, product) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)
    res.json(product); // return all todos in JSON format
  });

});


router.post('/addproduct', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  let newProduct = new Product({
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    Catag: req.body.Catag
  });

  Product.addProduct(newProduct, (err, product) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to add new product'
      });
    } else {
      res.json({
        success: true,
        msg: 'Product is added '
      });
    }
  });
});

router.put('/editproduct', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  let newProduct = {
    name: req.body.name,
    img: req.body.img,
    description: req.body.description,
    Catag: req.body.Catag
  };

  let oldProductID = req.body.oldId;

  Product.editProduct(oldProductID, newProduct, (err, product) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to update  product'
      });
    } else {
      res.json({
        success: true,
        msg: 'Product is updated '
      });
    }
  });
});

router.delete('/deleteproduct/:productId', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {

  let productID= req.params.productId;

  Product.removeProduct(productID, (err, product) => {
    if (err) {
      res.json({
        success: false,
        msg: 'Failed to update  product'
      });
    } else {
      res.json({
        success: true,
        msg: 'Product is updated '
      });
    }
  });
});

router.get('/manageproduct', passport.authenticate('jwt', {
  session: false
}), (req, res, next) => {
  Product.find(function (err, product) {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)
    res.json(product); // return all todos in JSON format
  });
});

module.exports = router;