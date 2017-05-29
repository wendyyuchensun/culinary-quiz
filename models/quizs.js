const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


// Quiz schema
const quizSchema = new Schema({
  question: {
    type: String
  },
  options: {
    option: {
      type: String
    }
  },
  answer: {
    type: Number
  }
});

module.exports = mongoose.model('quizs', quizSchema);
