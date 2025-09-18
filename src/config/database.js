const { Sequelize } = require("sequelize");
const path = require("path");

// Cria o banco SQLite na pasta do projeto
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "database.sqlite")
});

module.exports = sequelize;
