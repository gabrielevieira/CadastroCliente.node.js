const db = require("./db");

const Post = db.sequelize.define("post", {
  nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: db.Sequelize.TEXT,
    allowNull: false,
  },
  telefone: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  dataNSC: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  sexo: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Post;

Post.sync({ update: true });
