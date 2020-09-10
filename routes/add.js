var express = require("express");
var router = express.Router();

var Post = require("../models/Post");

/* GET home page. */
router.get("/form", function (req, res, next) {
  res.render("formulario", { Form: "Cadatro de Cliente" });
});

router.post("/add", function (req, res) {
  Post.create(    {
      nome: req.body.nome,
      endereco: req.body.endereco,
      telefone: req.body.telefone,
      dataNSC: req.body.dataNSC,
      sexo: req.body.sexo,
      email: req.body.email
    })
      .then(function () {
        //res.send("Postagem criada!");
        console.log(req.body.nome);
        res.redirect("/");
      })
      .catch(function (erro) {
        res.send("Erro ao cadastrar cliente!" + erro);
      });
});

module.exports = router;
