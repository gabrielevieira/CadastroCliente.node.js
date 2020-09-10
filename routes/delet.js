var express = require("express");
var router = express.Router();

const Post = require("../models/Post");

router.get("/delet/:id", function (req, res) {
  Post.destroy({ where: { id: req.params.id } })
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Erro ao excluir o cadastro" + erro);
    });
});

module.exports = router;
