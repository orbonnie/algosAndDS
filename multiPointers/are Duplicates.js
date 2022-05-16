const areDuplicates = (...args) => {
  args = args.sort((a, b) => a - b);
  let current = 0;

  for (let i = 1; i < args.length - 1; i++) {
    let next = args[i];
    if (next === args[current]) return true;
    else {
      current++;
    }
  }
  return false;
}

areDuplicates(1,9,4,5,2,6,7,3);