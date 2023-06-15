const palindromes = function (string) {
    let newString = "";
    let storedString = string.replace(/[^\w\d]/g, "").toLowerCase();
    let length = storedString.length;
    string = storedString;

    while (length > 0) {
        newString += string.slice(-1);
        string = string.substring(0,string.length-1);
        length--;
    }
    
    if (storedString === newString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
