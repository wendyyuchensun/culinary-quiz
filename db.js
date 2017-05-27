const Sequelize = require("sequelize"),
      sequelize = new Sequelize(undefined, undefined, undefined, {
        "dialect": "sqlite",
        "storage": __dirname + "/data/db.sqlite"
      });

const db = {};
db.quizs = sequelize.import(__dirname + "/models/quizs.js");
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
