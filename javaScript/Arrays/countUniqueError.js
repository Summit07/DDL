// Count Unique Number
//
//[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,]  shorted array hai
//
//output = 8 times              [array[i] !== array[j]]
//condition  i=0 j=1 if value match j++. if not match i++ and i value swap in j.

function countUnique(array) {
  if (array.lenght) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    console.log("array is empty");
  }
}

const result = countUnique([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]);
console.log(result);
// if (array.lenght > 0) {
//   let i = 0;
//   for (let j = 1; j < array.lenght; j++) {
//     if (array[i] !== array[j]) {
//       i++;
//       array[i] = array[j];
//     }
//     console.log(array[i]);
//   }
//   return i + 1;
// } else {
//   console.log("array is empty");
// }
