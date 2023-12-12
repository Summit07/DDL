const string1 = new String("this is the string");
const string2 = "this is the string";
const string3 = "this is the string1";
const string4 = `this is the string
this is also from string4`;

// console.log`${string4}`;

// console.log(string1[2]);
// console.log(string1.charAt(3));

//String is immutable therefote cannot use string1[2] = m  not possible

console.log(string1.replace("i", "m")); // cannot change the original string becox immutable
console.log(string2.replaceAll("i", "m")); // cannot change the original string becox immutable
console.log(string2);

const newStr = string1.concat(" are you concate");
console.log(newStr.length);
console.log(newStr.indexOf("the"));
console.log(newStr.lastIndexOf("a"));
console.log(newStr.startsWith("t"));
console.log(newStr.endsWith(" "));
console.log(newStr.substring(5)); // goes to towards the right side
console.log(newStr.substring(5, -1)); //goes to towards the left side

// This is Slice of the string

console.log(newStr.slice(-13, -1)); //goes to towards the left side

// to be converted to String

let tobeString = {
  name: "name",
  age: 34,
};

console.log(String(tobeString)); // not Right method to convert [obj or array ] into string

console.log(JSON.stringify(tobeString));
console.log(string1.toUpperCase());
console.log(string1.toLowerCase());
console.log(string1.charCodeAt(0));
console.log(String.fromCharCode(65));

console.log("A" === "a");

console.log(string1.localeCompare(string2)); // return 0  the are equal
console.log(string2.localeCompare(string3)); // return -1 they are not equal
console.log(string2.includes("is")); // return -1 they are not equal

//  String and Split and join()

console.log(string1.split("e"));
console.log(string1.split("e").join(" *and* "));
