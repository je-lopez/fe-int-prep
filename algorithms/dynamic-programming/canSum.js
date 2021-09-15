// check if target sum can be generated given a targetSum and array of nums. nums can be reused
//
// m = targetSum
// n = nums.length

// time: O(n^m)
// space: O(m)
const canSum1 = (targetSum, nums) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of nums) {
    if (canSum1(targetSum - num, nums)) return true;
  }

  return false;
};

console.log(canSum1(7, [2, 3]) ? 'Passed' : 'Failed');
console.log(canSum1(7, [5, 3, 4, 7]) ? 'Passed' : 'Failed');
console.log(canSum1(7, [2, 4]) === false ? 'Passed' : 'Failed');
console.log(canSum1(8, [2, 3, 5]) ? 'Passed' : 'Failed', '\n');

// time: O(m * n)
// space: O(m)
const canSum2 = (targetSum, nums, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of nums) {
    if (canSum2(targetSum - num, nums, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum2(7, [2, 3]) ? 'Passed' : 'Failed');
console.log(canSum2(7, [5, 3, 4, 7]) ? 'Passed' : 'Failed');
console.log(canSum2(7, [2, 4]) === false ? 'Passed' : 'Failed');
console.log(canSum2(8, [2, 3, 5]) ? 'Passed' : 'Failed');
console.log(canSum2(300, [7, 14]) === false ? 'Passed' : 'Failed');