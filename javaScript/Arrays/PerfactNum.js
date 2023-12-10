// Perfact Num ===  when sum of all the factorial of the number is equal to the number itself called Perfact Num
// example 6 = 1*2*3 = 1+2+3 = 6

const isPerfact = (num) => {
  let result = true;
  let factSum = 0;

  for (let i = 0; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      factSum += i;
      //   if (factSum == num) {
      //     result = true;
      //   } else {
      //     result = false;
      //   }
    }
  }

  return factSum == num ? true : false;
};

console.log(isPerfact(14));
