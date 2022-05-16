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