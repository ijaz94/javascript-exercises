const reverseString = function(string) {
// let splitString = string.split("");
// let stringReverse = splitString.reverse();
// let joinString = stringReverse.join("");
// return joinString;
let stringReverse = "";
for(let i = string.length - 1; i >= 0; i--){
stringReverse += string[i];
}
console.log(stringReverse);
return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
