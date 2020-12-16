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

// console.log(secondAnagram("gizmo", "sally"));    // => false
// console.log(secondAnagram("elvis", "lives"))    // => true
// console.log(secondAnagram("elviss", "lives"))    // => false

function thirdAnagram(str1, str2) {
  let str1Obj = {};
  let str2Obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (str1Obj[str1[i]]) {
      str1Obj[str1[i]]++
    } else {
      str1Obj[str1[i]] = 1
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2Obj[str2[i]]) {
      str2Obj[str2[i]]++
    } else {
      str2Obj[str2[i]] = 1
    }

  }


  for (const key in str1Obj) {

    if (str1Obj[key] !== str2Obj[key]) {
      return false
    }

  }

  return true

}
// console.log(thirdAnagram("gizmo", "sally"));    // => false
// console.log(thirdAnagram("elvis", "lives"))    // => true
// console.log(thirdAnagram("elviss", "lives"))    // => false

function fourthAnagram(str1, str2) {
  let obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (obj[`${str1[i]}1`]) {
      obj[`${str1[i]}1`]++
    } else {
      obj[`${str1[i]}1`] = 1
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (obj[`${str2[i]}2`]) {
      obj[`${str2[i]}2`]++
    } else {
      obj[`${str2[i]}2`] = 1
    }
  } 

  for (const key in obj) {
    if (obj[key[0]+"1"] !== obj[key[0]+"2"]) {
      return false;
    }
  }
  return true;
}
console.log(fourthAnagram("gizmo", "sally"));    // => false
console.log(fourthAnagram("elvis", "lives"))    // => true
console.log(fourthAnagram("elviss", "lives"))    // => false