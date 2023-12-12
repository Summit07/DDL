let arr = [1, 2, 3, 4, 5, 6, 5, 4, 7];
function secondeLargest(arr) {
  let uniqArr = Array.from(new Set(arr)); // O(n)
  console.log(uniqArr);
  uniqArr.sort((a, b) => {
    //O(nlogn)
    return b - a;
  });

  if (uniqArr.length >= 2) {
    return uniqArr[1];
  } else {
    return -1;
  }
  // return uniqArr;
}
function secondeLargestOptimise(arr) {
  let lasrgest = Number.NEGATIVE_INFINITY;
  let secondlasrgest = -1;
  for (let i = 0; i < arr.length; i++) {
    ///O(n)
    const e = arr[i];
    if (e > lasrgest) {
      secondlasrgest = lasrgest;
      lasrgest = e;
    } else if (e != lasrgest && e > secondlasrgest) {
      secondlasrgest = e;
    }
  }

  return secondlasrgest;
}
//Time Complexity == O(n )
//Space Complexity == O(1)
console.log(secondeLargestOptimise(arr));
