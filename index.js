function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true; 
}
function evenOdd(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}

 console.log(isPrime(7)); 
 console.log(isPrime(10));


console.log("8 is even:", evenOdd(8));
console.log("7 is even:", evenOdd(7));
