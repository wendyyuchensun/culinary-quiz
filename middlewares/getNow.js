module.exports = function () {
  const date = new Date;
  return date.getFullYear()
    + "/" + toDoubleDigit((date.getMonth() + 1))  
    + "/" + toDoubleDigit(date.getDate())
    + " " + toDoubleDigit(date.getHours())
    + ":" + toDoubleDigit(date.getMinutes()) 
    + ":" + toDoubleDigit(date.getSeconds());
};

function toDoubleDigit (digit) {
  return digit < 10? ("0" + digit):digit;
};
