let peopleArr = [
  { name: "A", age: 10 },
  { name: "B", age: 17 },
  { name: "C", age: 14 },
  { name: "D", age: 10 },
];

const peopleByAge = (peopleArr) => {
  let resultObj = {};
  for (let i = 0; i < peopleArr.length; i++) {
    if (resultObj[peopleArr[i].age]) {
      resultObj[peopleArr[i].age].push(peopleArr[i].name);
    } else {
      resultObj[peopleArr[i].age] = [peopleArr[i].name]; // this is lsit of name array
    }

    // if (resultObj[peopleArr[i].age]) {
    //   resultObj[peopleArr[i].age].push(peopleArr[i].name);
    // } else {
    //   resultObj[peopleArr[i].age] = [peopleArr[i].name];
    // }
  }

  return resultObj;
};

console.log(peopleByAge(peopleArr));
