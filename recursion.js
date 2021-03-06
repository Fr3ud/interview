'use strict';

const getMaxCallStackSize = i => {
    try {
        return getMaxCallStackSize(++i);
    } catch (e) {
        return i;
    }
};

console.log(getMaxCallStackSize(0));


const pow = (base, power) => {
    if (power === 1) return base;
    else return pow(base, power - 1) * base;
};

console.log(pow(2, 3));


const factorial = n => {
    if (n === 0) return 1;
    else return n * factorial(n - 1);
};

console.log(factorial(10));


const fibonacci = n => (n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

console.log(fibonacci(10));
