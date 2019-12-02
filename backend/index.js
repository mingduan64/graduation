require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./models");
//const seed = require("./seed");
const mw = require("./middleware");
const hdl = require("./handlers");
const webpack =require ("./webpack.config");
const passport = require('passport');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

// API REQUIRE AND USE HERE //

//app.use("/api/auth", require("./routes/r-login"));
app.use("/api/hcarousel", require ("./routes/r-hcarousel"));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.use("/api/auth", require ("./routes/r-auth"));
//app.use("/api/user", require("./routes/r-user"))
//app.use("/api/clients", require("./routes/r-client")); 
//app.use("/api/admin", require("./routes/r-admin"));


// HANDLE ERRORS AND LISTEN PORT //

app.use((req, res, next) => {
    let err = new Error("Route not found!");
    err.status = 404;
    next(err);
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Authorization, X-Requested-With, Content-Type, Accept, Accept-Language"
    );
    res.setHeader("Access-Control-Expose-Headers",
    "Authorization");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
app.use(hdl.Error.handle);


app.listen(process.env.PORT, async() => {
    await webpack();
    console.log(`[ CONFIG FILES ON PORT ${process.env.PORT} ]`);
    //load role
 //   await seed(); 
    console.log(`[ SERVER IS STARTED ON PORT ${process.env.PORT} ]`);
});



module.exports = app;



