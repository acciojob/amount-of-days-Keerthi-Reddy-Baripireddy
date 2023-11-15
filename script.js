function daysOfAYear(year) {
    if (year % 4 === 0) {
       
        if (year % 100 === 0) {
            if (year % 400 === 0) {
               
                return 366;
            } else {
              
                return 365;
            }
        } else {
             
            return 366;
        }
    } else {
        
        return 365;
    }
}


console.log(daysOfAYear(2022)); 
console.log(daysOfAYear(2024)); 
console.log(daysOfAYear(1900)); 
console.log(daysOfAYear(2000));
