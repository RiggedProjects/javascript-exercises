const removeFromArray = function(theArray, ...arg) {
    //Found this resource helpful to pass the first test. Used the first example.
    //Should probably look at the second example here if there are duplicate values in the array.
    //https://tecadmin.net/remove-array-element-by-value-in-javascript/
    //After the first test passed I found this resource helpful in deciding which loop to go with.
    //https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
    //I decided on "ES6 for-of Statement" and nested the previous logic inside the loop other than the return.
    for (const a of arg) {
        //Get the index of each argument "a" from ...arg passed into the function.
        //let index = theArray.indexOf(a);
        
        //Validates the argument "a" was actually found in "theArray".
        //if (index > -1) {
            //Removes 1 element at the "index" which will be our argument "a".
        //    theArray.splice(index, 1); 
        //}

        //Declares the variable "index" and assigns it 0 so we start at the beginning of "theArray".
        let index = 0;
        //Continues until the index is larger than the array length.
        //This would mean we have searched the entire array.
        while (index < theArray.length) {
            //Checks the current "index" position of the array and checks if the value equals...
            //the argument "a" we are looking for from "...arg" passed into the function.
            if (theArray[index] === a) {
                //Removes 1 element from "theArray" at the "index" which will be our argument "a" we matched.
                theArray.splice(index, 1);
            //There was no match for our argument "a" at this "index" of "theArray".
            } else {
                //Increment the "index" by 1 so we can check the next position.
                ++index;
            }
        }
    }
    //Return the modified array.
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
