const sumAll = function (num1, num2) {
  // write down all the numbers between 1 and 2 and add them together
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  )
    return "ERROR";

  let lowerNumber = num1 < num2 ? num1 : num2;
  let higherNumber = num1 >= num2 ? num1 : num2;

  let total = 0;
  for (let i = lowerNumber; i <= higherNumber; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;
