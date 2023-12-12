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

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    //O(n)
    const e = arr[i];
    if (e == arr[i + 1]) {
      arr.splice(i, 1); //O(1) becoz of single element
      console.log(i, arr);
      i--;
      console.log(i, arr[i]);
    }
  }
  return arr;
}

function removeDuplicateWithOut(arr) {
  if (arr.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      // console.log(arr[i], arr[j], i);
      arr[i] = arr[j];
    }
  }
  // arr.splice(i + 1, arr.length);
  while (i + 1 < arr.length) {
    console.log(i, arr.length);
    arr.pop();
    console.log(arr);
  }
  console.log(arr);
  return i + 1;
}

function getDublicates(arr1, arr2) {
  arr1 = arr1.filter((val) => !arr2.includes(val));
}

function getDublicate(arr) {
  return arr.filter((a, index) => {
    console.log(a, index);
    return arr.indexOf(a) === index;
  });

  // return ans;
}

function findMDNduplicate() {
  const indices = [];
  const array = ["a", "b", "a", "c", "a", "d"];
  const element = "a";
  let idx = array.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  console.log(indices);
  return indices;
}
console.log(findMDNduplicate());

// console.log(getDublicate([1, 3, 2, 1, 2, 3, 3, 5, 9]));
