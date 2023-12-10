// Palindrome
// dad -- dad , level -- level , noon -- noon , 121 -- 121 , malyalam -- malyalam

function isPal(str) {
  let reverse = str.split("").reverse().join("");
  console.log(reverse);
  return str.toUpperCase() === reverse.toUpperCase();
}
console.log(isPal("Level"));
// isPal("Level");

function isPal2(str) {
  let newStr = str.toUpperCase();
  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if (newStr[left] !== newStr[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(isPal2("noon"));
