const nestedSum = (obj, sum = 0) => {
  if (Object.entries(obj).length === 0) return 0;
  let current = Object.keys(obj)[0];
  if (obj[current] instanceof Object){
      nestedSum(obj[current], sum);
  } else if (typeof obj[current] === 'number' && obj[current] % 2 === 0){
      sum += obj[current];
  }
  delete obj[current];
  return sum + nestedSum(obj, sum);
}