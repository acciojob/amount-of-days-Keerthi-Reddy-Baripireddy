function daysOfAYear(year) {
  // Check if the year is a leap year
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

  // Return the number of days based on leap year or not
  return isLeapYear ? 366 : 365;
}

// Get user input for the year
var userInput = prompt("Enter a year:");

// Convert the user input to an integer
var userYear = parseInt(userInput, 10);

// Check if the input is a valid year
if (isNaN(userYear) || userYear < 1 || userYear > 9999) {
  alert("Please enter a valid year between 1 and 9999.");
} else {
  // Call the function and display the result
  alert(  daysOfAYear(userYear));
}
