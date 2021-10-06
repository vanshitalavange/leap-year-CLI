var readlineSync = require('readline-sync');
console.log("Check if a year is leap or not 👇")
var year = readlineSync.question('Enter a year : ');
function checkLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
function displayResult() {

  if (year < 0 || year === "") {
    console.log("Please enter a valid input");
  }
  else {
    if (checkLeapYear(year)) {
      console.log(year + " is a leap year");
    }
    else {
      console.log(year + " is not a leap year");
    }

  }
}


console.log(displayResult());