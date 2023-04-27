const palindromes = function (str) {
  /* 
  clean input
  create a new string with reversed input
  return comparison
  */

  str = str.replace(/[^a-zA-Z]+/g, "").toLowerCase();
  let reverse = str.split("").reverse().join("");
  return str === reverse;
};

// Do not edit below this line
module.exports = palindromes;
