function badTwoSum(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    let el1 = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      let el2 = arr[j]
      if (el1 + el2 === targetSum) {
        return true
      }
    }
  }
  return false

}

// const arr = [0, 1, 5, 7];
// console.log(badTwoSum(arr, 10)) // should be false
// console.log(badTwoSum(arr, 6)); // => should be true

function binarySearch(arr, target) {
  if (arr.length === 0) return false

  let midIdx = Math.floor((arr.length / 2))
  let left = arr.slice(0, midIdx)
  let right = arr.slice(midIdx + 1)
  if (arr[midIdx] === target) {
    return true;
  }
  else if (arr[midIdx] > target) {
    return binarySearch(left, target)
  }
  else if (arr[midIdx] < target) {
    return binarySearch(right, target)
  }
}

// const arr = [0, 1, 5, 7];
// console.log(binarySearch(arr, 5))
// console.log(binarySearch(arr, 8))
// console.log(binarySearch(arr, 1))

function okayTwoSum1(arr, targetSum) {
  arr.sort()
  console.log(arr)
  let ele; 

  while (arr.length > 0) {
    ele = arr.pop();
    if (binarySearch(arr, targetSum - ele)) {
      return true;
    }
  }
  return false;
}
const arr = [0, 1, 5, 7];
const arr1 = [0, 1, 5, 7, 4, 6];
const arr2 = [0, 3, 16, 7, 4, 6];
console.log(okayTwoSum1(arr, 1))
console.log(okayTwoSum1(arr1, 11))
console.log(okayTwoSum1(arr2, 199))


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
