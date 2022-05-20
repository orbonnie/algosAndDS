const recurseRange = (n) => {
  if (n === 0) return 0;

  return n + recurseRange(n -1);
}