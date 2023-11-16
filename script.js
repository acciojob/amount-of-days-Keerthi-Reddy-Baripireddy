function daysOfAYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366; // Leap year
    } else {
        return 365; // Non-leap year
    }
}

// Example usage
console.log(daysOfAYear(2022)); // Output: 365
console.log(daysOfAYear(2024)); // Output: 366
console.log(daysOfAYear(1900)); // Output: 365
console.log(daysOfAYear(2000)); // Output: 366
