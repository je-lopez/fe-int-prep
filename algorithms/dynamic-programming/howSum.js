const { compareArrays } = require('./helper');

// given a targetSum and array of nums, return any combination
// of elements in nums that add up to targetSum
// if no combination, return null
//
// m = targetSum
// n = nums.length

// time: O(n^m * n)
// space: O(m)
const howSum1 = (targetSum, nums) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of nums) {
    const sumRes = howSum1(targetSum - num, nums);

    if (sumRes !== null) {
      return [...sumRes, num];
    }
  }

  return null;
};

console.log(compareArrays(howSum1(7, [2, 3]), [2, 2, 3])); // [3, 2, 2]
console.log(compareArrays(howSum1(7, [5, 3, 4, 7]), [3, 4])); // [4, 3]
console.log(compareArrays(howSum1(7, [2, 4]), null)); // null
console.log(compareArrays(howSum1(8, [2, 3, 5]), [2, 2, 2, 2])); // [2, 2, 2, 2]

// time: O(n * m^2)
// space: O(m^2)
const howSum2 = (targetSum, nums, memo={}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of nums) {
    const remainingNums = howSum2(targetSum - num, nums, memo);

    if (remainingNums !== null) {
      memo[targetSum] = [...remainingNums, num];
      return memo[targetSum];
    }
  }

  memo[targetSum] = null;
  return null;
};

console.log(compareArrays(howSum2(7, [2, 3]), [2, 2, 3])); // [3, 2, 2]
console.log(compareArrays(howSum2(7, [5, 3, 4, 7]), [3, 4])); // [4, 3]
console.log(compareArrays(howSum2(7, [2, 4]), null)); // null
console.log(compareArrays(howSum2(8, [2, 3, 5]), [2, 2, 2, 2])); // [2, 2, 2, 2]
console.log(compareArrays(howSum2(300, [7, 14]), null)); // null