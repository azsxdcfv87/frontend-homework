document.getElementById('calculateButton').addEventListener('click', calculatePrime);

function nthPrime(n) {
  return new Promise((resolve) => {
    let primes = [];
    let num = 2;
    let count = 0;

    function checkNextNumber() {
      if (count < n) {
        if (isPrime(num)) {
          primes.push(num);
          count++;
        }
        num++;
        setTimeout(checkNextNumber, 0);
      } else {
        resolve(primes[n - 1]);
      }
    }

    checkNextNumber();
  });
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

  const numSqrt = Math.floor(Math.sqrt(num));

  for (let i = 5; i <= numSqrt; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

function calculatePrime() {
  const position = document.getElementById('primePosition').value;
  nthPrime(position).then(prime => {
    document.getElementById('result').textContent = 'The ' + position + 'th prime number is ' + prime;
  });
}

// nthPrime(20).then(prime => console.log(prime)); // 71