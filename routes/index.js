var express = require("express");
var router = express.Router();

var Post = require("../models/Post");
/* GET home page. */
router.get("/", function (req, res, next) {
  Post.findAll({ order: [["id", "DESC"]] }).then(function (posts) {
    res.render("index", { posts: posts });
    console.log(posts);
  });
});

module.exports = router;
