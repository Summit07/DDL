// const fibonacci = (num) => {
//   let arr = [0, 1];

//   for (let i = 1; i < num; i++) {
//     arr.push(arr[i] + arr[i - 1]);
//   }
//   console.log(arr[num]);
//   return arr;
// };
const fibonacciRecursion = (num) => {
  if (num <= 1) return num;

  return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2);
};

console.log(fibonacciRecursion(8));
