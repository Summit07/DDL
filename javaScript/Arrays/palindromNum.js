const isPlaindrome = (inputChar) => {
  let str = inputChar.toString();
  let resultWord = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultWord += str[i];
  }
  return resultWord == str ? true : false;
};

const isPla = (inputChar) => {
  let str = inputChar.toString().split("").reverse().join("");

  if (typeof inputChar === "number") {
    //EDGE CASE
    str = +str;
  }
  return inputChar < 0 ? false : inputChar === str;
};

// console.log(isPlaindrome("racecar"));
// console.log(isPlaindrome("abc"));
// console.log(isPlaindrome(121));
console.log(isPla("racecar"));
console.log(isPla("abc"));
console.log(isPla(121));
