const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(num) {
	let total = 0;

  for (let n of num) {
    total += n;
  }
  return Number(total);
};

const multiply = function(num) {
  let total = 1;

  for (let n of num) {
    total *= n;
  }
  return Number(total);
};

const power = function(a, b) {
  let o = a;
  while (b > 1) {
    a *= o;
    --b;
  }
  return Number(a);
};

const factorial = function(num) {
  let total = 1;
  while (num > 0) {
    total *= num;
    --num;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
