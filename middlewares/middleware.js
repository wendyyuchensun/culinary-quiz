const getNow = require("./getNow.js");

module.exports = { 
  logger: function (req, res, next) {
    const now = getNow();
    console.log(`${now}  ${req.method} ${req.originalUrl}`);
    next();
  },
  getNow: getNow
};
