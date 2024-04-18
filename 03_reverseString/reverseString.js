const reverseString = function(string) {
let splitString = string.split("");
let stringReverse = splitString.reverse();
let joinString = stringReverse.join("");
return joinString;
};

// Do not edit below this line
module.exports = reverseString;
