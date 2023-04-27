// Probably better to use Math.round(someValue * 10) / 10
// to get rounding for a single decimal place.

const convertToCelsius = function (temperature) {
  return parseFloat(((temperature - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (temperature) {
  return parseFloat((temperature * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
