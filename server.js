const express = require('express'),
      // Start server
      app = express(),
      PORT = 3000,
      mongoose = require('mongoose'),
      middlewares = require('./middlewares/middleware');

// Connect to DB
mongoose.connect('mongodb://localhost/culinary-quizs');
const db = mongoose.connection;

// Check DB connection
db.once('open', () => {
  middlewares.logMsg('Connected to DB');
});

// Check for DB errors
db.on('error', e => {
  middlewares.logMsg(e);
});

// Bring in DB model
const quizs = require('./models/quizs');

// Middlewares
app.use(middlewares.logger());

// Static files
app.use(express.static(__dirname + '/public'));

// Routing
app.get('/quizs', function (req, res) {
  quizs.find({}, (e, quizs) => {
    if (e) {
      middlewares.logMsg(e);
    } else {
      res.send(quizs);  
    };
  });
});

app.listen(PORT, function () {
  middlewares.logMsg(`Express server started at PORT ${PORT}`);
});
