const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
mongoose.Promise = Promise;

// REQUIRE THE OTHER MODELS HERE

module.exports.Client = require("./m-client");
module.exports.Aboutus =require("./m-about");
module.exports.Member = require("./m-member");
module.exports.Carousel = require("./m-carousel");
module.exports.Category = require("./m-category");
module.exports.Topsale = require("./m-topsale");
module.exports.Product = require("./m-product");
module.exports.BlogCategory = require("./m-blogcategory");
module.exports.Blog = require("./m-blog");
module.exports.FAQ = require("./m-faq");
module.exports.Img = require("./m-img");
module.exports.Hcarousel = require("./m-hcarousel")
module.exports.User = require("./m-user")


module.exports.Word = require("./m-word");

// REPORT

