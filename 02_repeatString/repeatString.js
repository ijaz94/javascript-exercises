const repeatString = function(string, times) {
  if (times <0) {
    return 'ERROR'
  }
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
