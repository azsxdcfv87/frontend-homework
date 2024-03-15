function nthPrime(n) {
  let primes = [];
  let num = 2;
  let count = 0;

  while (count < n) {
    if (isPrime(num)) {
      primes.push(num);
      count++;
    }
    num++;
  }
  // for (let i = 0; i < n; i++) {
  //   if (isPrime(num)) {
  //     primes.push(num);
  //   }
  //   num++;
  // }

  return primes[n - 1];
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  const nSqrt = Math.floor(Math.sqrt(n));

  for (let i = 5; i <= nSqrt; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

const prime = nthPrime(20);
console.log(prime); // 71