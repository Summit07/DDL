// Array Decleration
let person = {
  name: "sumit",
  age: 25,
};

let arr = [1, 2, 3, 4, 5];
// console.log(arr[3].name); // "sumit"
// console.warn(arr.length); // 4

// Array add and remove

// arr.push("orange"); //add
arr.push("banana"); //add
arr.pop(); // remove from back
arr.shift(); //remove from front
arr.unshift(9); //add in fron

// console.warn(arr);

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  //   console.log(element);
}

let i = 0;

while (i < arr.length) {
  //   console.log(arr[i], "while");
  i++;
}

// map and forEach Higher Order Function

let newArr = arr.map((item, index, array) => item + " w");
let newArrs = arr.map((item, index, array) => {
  //   console.log(array, i);
  return item + " w";
});
// console.log(newArrs);

let filters = arr.filter((item, index, array) => {
  return index > 3; // return array if condition is satisfies
});
// console.log(filters);

let reduces = arr.reduce((acc, crr) => {
  //   console.log(acc, crr);
  return acc + crr;
}, 7);

// console.log(reduces);

let somes = arr.some((item, index, array) => {
  return item > 9;
});
// console.log(somes);
let everys = arr.every((item, index, array) => {
  return item > 2;
});
// console.log(everys);
let finds = arr.find((item, index, array) => {
  return item < 3;
});
console.log(finds);
