const repeatString = function(string, num) {
    count = 0;
    message = '';

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
