//Divide and Conquerer Technique
//Find the index of given no in a sorted array 7, if your array is shorted 50% problem is solved
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//min=0 , element =1
//max=array.length-1 , element or value=15 , indexing is array.length-1
// minIndex={min+max}/2 ==> (0,14) ==> 7(index), value=8
//if array[minIndex]< number(7)
// min=minIndex+1
//array[minIndex] > number
//max=minIndex-1, min=0 ,max=6 {1234567}

function searchAlgo(array, number) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    console.log(`"midIndex" + ${midIndex} + "min" + ${min} + "max" + ${max}`);
    if (array[midIndex] < number) {
      min = midIndex + 1;
    } else if (array[midIndex] > number) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}
const result = searchAlgo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  88
);
console.log(result);
