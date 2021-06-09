
function getPrimeFactors(integer) {
    const primeArray = [];
    let isPrime;
  
    for (let i = 2; i <= integer; i++) {
        if (integer % i !== 0) continue;
  
    for (let j = 2; j <= i / 2; j++) {
        isPrime = i % j !== 0;
    }
  
    if (!isPrime) continue;
        integer /= i
        primeArray.push(i);
    }
    return primeArray;
  }
console.log(getPrimeFactors(13195).join(', '));
