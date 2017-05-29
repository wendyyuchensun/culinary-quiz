const getNow = require("./getNow.js");

module.exports = { 
  logMsg (msg) {
    const now = getNow();
    console.log(`${now}  ${msg}`);
  },
  logger () {
    // Use arrow function and closure 
    // so `this` will always be current module 
    return (req, res, next) => {
      this.logMsg(`${req.method} ${req.originalUrl}`);
      next();
    };
  }
};
