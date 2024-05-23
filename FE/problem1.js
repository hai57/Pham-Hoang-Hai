// Recursive
var recursive = function (n) {
  if (n === 0) {
    return 0;
  } else {
    return n + recursive(n - 1);
  }
};

// Iterative
var iterative = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};

// Formula
var formula = function (n) {
  return n * (n + 1) / 2;
};
