const repeatString = function(string, times) {
    let repeatedStringNum = "";
    while (times > 0) {
      repeatedStringNum += string;
      times--;
    }
    return repeatedStringNum;
  }
  repeatString("abc", 3);

// Do not edit below this line
module.exports = repeatString;
