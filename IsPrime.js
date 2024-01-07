function isPrime(num) {
    for(let i = 2; i < num; i++)
        if (num % i === 0) return false; 
    return num > 1;
}


console.log(isPrime(2687)); // true
console.log(isPrime(9087)); // false