const fibonacci = function(n) {
    let index = 0;
    let fib = [ 1, 1 ];

    if (Number(n) > 0) {
        while (index < n - 2) {
            let sum = fib[fib.length - 1] + fib[fib.length - 2];
            fib.push(sum);
            index++;
        }
    
        return fib[fib.length - 1];
    } else {
        return 'OOPS';
    }
};

// Do not edit below this line
module.exports = fibonacci;
