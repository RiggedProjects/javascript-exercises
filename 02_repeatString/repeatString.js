const repeatString = function(string, num) {
    let count = 0;
    let message = '';

    if (string === '') {
        message = '';
    } else if (num < 0) {
        message = 'ERROR';
    } else {
        while (count < num) {
            message = message + 'hey';
            count++;
        }
    }
    
    return message;
};

// Do not edit below this line
module.exports = repeatString;
