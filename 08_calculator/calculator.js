const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrayOfNumbers) {
  let total = 0;
  for (const number of arrayOfNumbers) {
    total += number;
  }

  return total;
};

const multiply = function (arrayOfNumbers) {
  let total = 1;
  for (const number of arrayOfNumbers) {
    total *= number;
  }

  return total;
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let total = 1;
  if (num === 0) return 1;
  else {
    for (let i = num; i > 0; i--) {
      total *= i;
    }
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
