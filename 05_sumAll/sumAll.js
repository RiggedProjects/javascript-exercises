const sumAll = function(a, b) {
    //These aren't necessary, but make things easier to read.
    //Declare variable to hold maximum value after it's found.
    let max;
    //Declare variable to hold minimum value after it's found.
    let min;
    //Declare variable to hold the total sum.
    let total = 0;
   
    //Validates the two values passed into the function. Allow two positive integers only.
    if (Number.isInteger(a + b) && a > 0 && b > 0) {

        //If statement to convert "a" and "b" to the "min" and "max" variables.
        if (a > b) {
            max = a;
            min = b;
        } else {
            max = b;
            min = a;
        }

        //Loop that uses the "total" value to store the continuous sum of the values from the min to the max.
        while (min <= max) {
            total = total + min;
            min++;
        }

        //Return the total.
        return total;
    } else {
        //Return "error" because both of the values "a" and "b" were not a positive integer.
        return 'ERROR';
    } 
};

// Do not edit below this line
module.exports = sumAll;
