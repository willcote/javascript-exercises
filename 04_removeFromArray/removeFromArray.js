const removeFromArray = function (arr, ...remove) {
  for (rem of remove) {
    for (let i = 0; i < arr.length; i++) {
      if (rem === arr[i]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
