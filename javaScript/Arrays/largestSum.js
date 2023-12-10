// [1,2,3,4,3,5,4,6,7,8]
//Count largest sum of consecutive 4 digits
//digit = 4
//sum =25

//condition
//digit > array
//10-4+1=7 //  7 times loop chalega

function findLargest(array, num) {
  if (num > array) {
    throw new Error("Number is not greater than  array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let tem = 0;
      for (let j = 0; j < num; j++) {
        console.log(i, j);
        tem += array[j + i];
      }
      if (tem > max) {
        max = tem;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log("result", result);
