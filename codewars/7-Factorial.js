const factorial = (n) => {
    if (n < 0 || n > 12) throw new Error("RangeError");
    return n <= 1 ? 1 : n * factorial(n - 1);
};