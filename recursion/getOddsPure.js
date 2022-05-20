function getOdds(nums) {
  let odds = [];

  if (nums.length === 0)
      return odds;

  if (nums[0] % 2 !== 0) odds.push(nums[0]);

  odds = odds.concat(getOdds(nums.slice(1)));
  return odds;
}