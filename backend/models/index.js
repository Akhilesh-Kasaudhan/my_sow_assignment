const { Sequelize } = require("sequelize");
const config = require("../config");

const sequelize = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    dialect: config.DB_DIALECT,
    logging: false,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Terms = require("./Terms")(sequelize, Sequelize);
db.Pricelist = require("./Pricelist")(sequelize, Sequelize);

module.exports = db;
