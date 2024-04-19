const removeFromArray = function(array, ...args) {
return newArray = array.filter(val => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
