// Recursive
var recursive = function (n) {
  if (n === 0) {
    return 0;
  } else {
    return n + recursive(n - 1);
  }
};

// Accumulation
var accumulation = function (n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
};

// Formula
var formula = function (n) {
  return n * (n + 1) / 2;
};
