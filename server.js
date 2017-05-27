const express = require("express"),
      app = express(),
      PORT = 3000,
      middlewares = require("./middlewares/middleware.js"),
      db = require("./db.js");

app.use(middlewares.logger);
app.use(express.static(__dirname + "/public"));

app.get("/quizs", function (req, res) {
  const id = parseInt(req.params.id);
  db.quizs.findAll({
    attributes: ["id", "question", "answer"],
  }).then(quiz => {
    if (quiz.length) {
      res.json(quiz);
    } else {
      res.status(404).send();
    };
  });
});

db.sequelize.sync().then((db) => {
  app.listen(PORT, function () {
    const now = middlewares.getNow();
    console.log(`${now}  Express server started at PORT ${PORT}`);
  });
});
