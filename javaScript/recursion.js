// Recursion : when function call it self
// otherwise it will get called for infinite time
// if a function call it self then  there must be an end point

let count = 1;
function demo(num) {
  if (count > num) {
    return;
  }
  console.log("first", count);
  count++;
  demo(num);
}
demo(10); // calling
