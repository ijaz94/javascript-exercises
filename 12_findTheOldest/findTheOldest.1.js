const { getAge } = require("./findTheOldest");

const findTheOldest = function (array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
  });
};
exports.findTheOldest = findTheOldest;
