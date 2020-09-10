const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("cadastrocliente", "root", "gabi123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
