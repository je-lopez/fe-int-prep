// find nth number in fib sequence
// all assume n >= 1

// time: O(2^n)
// space: O(n)
const fib1 = (n) => {
  return n <= 2 ? 1 : fib1(n - 2) + fib1(n - 1);
};

console.log(fib1(6) === 8);
console.log(fib1(7) === 13);
console.log(fib1(10) === 55);

// time: O(n)
// space: O(n)
const fib2 = (n, memo={}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;

  memo[n] = fib2(n - 2, memo) + fib2(n - 1, memo);
  return memo[n];
};

console.log(fib2(15) === 610);
console.log(fib2(25));
console.log(fib2(50));