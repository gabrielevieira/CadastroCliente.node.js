var express = require("express");
var router = express.Router();

const Post = require("../models/Post");

router.get("/edit/:id", function (req, res) {
  Post.findByPk(req.params.id)
    .then((post) => {
      res.render("edit", {
        id: req.params.id,
        nome: post.nome,
        endereco: post.endereco,
        telefone: post.telefone,
        dataNSC: post.dataNSC,
        sexo: post.sexo,
        email: post.email,
      });
    })
    .catch(function (erro) {
      res.send("Erro ao atualizar o cadastro 1" + erro);
    });
});

router.post("/edition/:id", function (req, res) {
  Post.update(
    {
      nome: req.body.nome,
      endereco: req.body.endereco,
      telefone: req.body.telefone,
      dataNSC: req.body.dataNSC,
      sexo: req.body.sexo,
      email: req.body.email,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(function () {
      res.redirect("/");
    })
    .catch(function (erro) {
      res.send("Erro ao atualizar o cadastro 2" + erro);
    });
});

module.exports = router;
