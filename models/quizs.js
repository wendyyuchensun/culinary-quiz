module.exports = function (sequelize, DataTypes) {
  return sequelize.define('quizs', {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  });  
};
