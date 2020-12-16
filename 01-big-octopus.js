function quadraticBiggestFish(fishes) {
  let bigFish;

  for (let i = 0; i < fishes.length; i++) {
    let fishA = fishes[i];
    for (let j = i + 1; j < fishes.length; j++) {
      let fishB = fishes[j];
      if (fishA.length > fishB.length) {
        bigFish = fishA;
      } else {
        bigFish = fishB;
      }
    }
  }
  return bigFish;
}
const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
  'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];
// console.log(quadraticBiggestFish(fishies))

function nlognBiggestFish(fishes) {
  fishes.sort(function(fishA, fishB) {
    return fishA.length - fishB.length;
  })
  return fishes[fishes.length - 1]
}

//console.log(nlognBiggestFish(fishies))

function linearBiggestFish(fishes) {
  let bigFish = fishes.reduce((acc, el) => {
    acc.length < el.length
      return el;
  })
  return bigFish;
}
// console.log(linearBiggestFish(fishies))


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  let tile = tilesArray.filter((el, i) => {
   return el === direction
    
  })
  return tilesArray.indexOf(tile[0])
}
//console.log(slowDance('down',tilesArray))


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  return tilesObj[direction]
}

// console.log(fastDance('down', tilesObj))