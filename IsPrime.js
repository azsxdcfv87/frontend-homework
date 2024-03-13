function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  const nSqrt = Math.floor(Math.sqrt(n));

  for (let i = 5; i <= nSqrt; i += 6) {
    // n % i: 6n + 5 -> 6(n + 1) - 1 -> 6n - 1, n % (i + 2): 6n + 1
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(11)); // false