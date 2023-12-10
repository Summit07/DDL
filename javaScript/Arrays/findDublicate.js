const findDub = (arr) => {
  let dublicate = [];
  let unique = []; // if unique does not have first time then push after that push into duplicate
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    } else {
      dublicate.push(arr[i]);
    }
  }

  return dublicate;
  //   return unique;
};

const findDUnique = (arr) => {
  let unique = []; // if unique does not have first time then push after that push into duplicate
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
};

console.log(findDUnique([1, 2, 3, 5, 3, 1, 1, 1, 9]));
