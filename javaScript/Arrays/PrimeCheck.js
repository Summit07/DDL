const isPrime = (num) => {
  let result = true;
  let len = Math.floor(num / 2);

  for (let i = 2; i < len; i++) {
    if (num % i === 0) {
      result = false;
      console.log(len, result);
      break;
    }
  }
  return result;
};

// const isPrime = (inputNum) => {
//   let result = true;
//   for (let i = 2; i < inputNum; i++) {
//     if (inputNum % i === 0) result = false;
//     break;
//   }
//   return result;
// };
console.log(isPrime(9));
// isPrime(112);
