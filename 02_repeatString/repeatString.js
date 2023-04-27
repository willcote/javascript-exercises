const repeatString = function (str, num) {
  if (num < 0) return "ERROR";

  let fullString = "";
  for (let i = 0; i < num; i++) {
    fullString += str;
  }
  return fullString;
};

// Do not edit below this line
module.exports = repeatString;
