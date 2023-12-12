function leadingDots(str) {
  let len = 8;
  if (str.length > len) {
    let newstr = str.slice(0, len) + "...";
    console.log(newstr);
    return newstr;
  } else {
    return str;
  }
}

console.log(leadingDots("this is the leading dots"));
