const averagePair = (arr, avg) => {
  let current = 0;

  for (let i = 1; i < arr.length; i++) {
      let next = arr[i];
      if ((arr[current] + next)/ 2 === avg) return true;
      else current++;
  }
  return false;
}