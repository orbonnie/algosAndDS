//only counts numbers that occur once
function countUnique(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    let val = arr[i];
    if (current !== next) {
      count++;
    } else {
      while (arr[i] === current){
        i++;
      }
      i--;
    }
  }
  return count;
}

//counts how many distinct numbers occur
function countUnique2(arr) {
  let current = 0;
  let next = 1;
  for (let i = 0; i < arr.length; i++) {
    if(next === arr.length -1) break;
    while (arr[current] === arr[next] && next < arr.length - 1) {
      next++;
    }
    if (arr[current] !== arr[next]) {
      arr[current + 1] = arr[next];
      current++;
    }
  }
  return current + 1;
}

//refactored to simplify loop
function countUnique3(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}