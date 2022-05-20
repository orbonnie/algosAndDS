function getOdds(nums) {
  let odds = [];

  let findOdds = (input) => {
      if (input.length === 0) return;
      if (input[0] % 2 !== 0) odds.push(input[0]);
      findOdds(input.slice(1));
  }

  findOdds(nums);
  return odds;
}