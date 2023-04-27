const reverseString = function (str) {
  let strArray = str.split("");
  let reversedString = "";

  // this works
  for (let i = strArray.length - 1; i >= 0; i--) {
    reversedString += strArray[i];
  }

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
