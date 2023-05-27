const reverseString = function(string) {
    let newString;
    let pos;

    newString = '';

    for ( pos = string.length - 1; pos >= 0; pos-- ) {
        newString = newString + string[pos];
    }
    
    //Found this method first which was my original idea of how you would do this.
    //https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
    //I re-wrote it above to show how I would of actually wrote it if I hadn't found the exact answer.
    /* for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    } */

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
