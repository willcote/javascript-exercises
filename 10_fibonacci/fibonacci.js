const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  num = parseInt(num);

  if (num === 1 || num === 2) return 1;

  let prev = 1;
  let total = 2;
  for (let i = 3; i < num; i++) {
    let temp = total;
    total += prev;
    prev = temp;
  }

  return total;
};

// Do not edit below this line
module.exports = fibonacci;
