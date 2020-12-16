function firstAnagram(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    let index = str2.indexOf(letter)
    if (index !== -1) {
      str2 = str2.slice(0, index) + str2.slice(index + 1)
    } else {
      return false;
    }
  }
  if (str2.length === 0) {
    return true;
  }
}

// console.log(firstAnagram("gizmo", "sally"));    // => false
// console.log(firstAnagram("elvis", "lives"))    // => true
// console.log(firstAnagram("elviss", "lives"))    // => false

function secondAnagram(str1, str2) {
  str1 = str1.split("");
  str2 = str2.split("");

  str1.sort();
  str2.sort();

  str1 = str1.join("");
  str2 = str2.join("");

  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
}

console.log(secondAnagram("gizmo", "sally"));    // => false
console.log(secondAnagram("elvis", "lives"))    // => true
console.log(secondAnagram("elviss", "lives"))    // => false

function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
