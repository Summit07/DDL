// Linear Search

const users = [
  { userName: "sumit", emal: "sumit@gmail.com" },
  { userName: "rahul", emal: "rahul@gmail.com" },
  { userName: "anoop", emal: "anoop@gmail.com" },
];

function isUserExit(arr, val) {
  for (let item of arr) {
    if (item["userName"] === val) {
      return true;
    }
    // else {
    //   return false;
    // }
  }
  return false;
}
const res = isUserExit(users, "sumit");
console.log(res);
