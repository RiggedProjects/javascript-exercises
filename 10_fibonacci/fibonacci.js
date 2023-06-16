const fibonacci = function(n) {
    let index = 0;
    let fib = [ 1, 1 ];
    
    while (index < 30) {
        let sum = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(sum);
        index++;
    }

    let value = fib[Number(n) - 1];

    if (value > 0) {
        return value;
    } else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
