const isPrime = num => {
    const max = Math.sqrt(num);

    for (let i = 2; i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}


const getPrimes = num => {
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    return primes;
}


/**
 * Sieve of Eratosthenes algorithm O(log log n)
 */

{
    const getPrimes = num => {
        const sieve = [];
        const primes = [];

        for (let i = 2; i <= num; i++) {
            if (!sieve[i]) {
                primes.push(i);

                for (let j = i * i; j <= num; j += i) {
                    sieve[j] = true;
                }
            }
        }

        return primes;
    }
}
