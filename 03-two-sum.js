function badTwoSum(arr, targetSum) {
  for (let i= 0; i< arr.length; i++){
    let el1 = arr[i]
    for (let j= i+1; j < arr.length; j++){
      let el2= arr[j]
      if(el1+el2 === targetSum){
        return true
      }
    }
  }
  return false

}

const arr = [0, 1, 5, 7];
// console.log(badTwoSum(arr, 10)) // should be false
// console.log(badTwoSum(arr, 6)); // => should be true


function okayTwoSum1(arr, targetSum) {
  arr.sort()
  let midIdx=Math.floor((arr.length/2))
  let left = arr.slice(0,midIdx)
  let right = arr.slice(midIdx+1)
  if()
}


function okayTwoSum2(arr, targetSum) {
  // Code goes here ...
}


function twoSum(arr, targetSum) {
  // Code goes here ...
}


function twoSumIndices(arr, targetSum) {
  // Code goes here ...
}
