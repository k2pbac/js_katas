const conditionalSum = function(values, condition) {
  // Your code here
  let sum = 0;
  if(values && values.length > 0) {
    for (let el of values) {
      if (condition === "even") {
        if (el % 2 === 0) {
          sum += el;
        }
      }
      else {
        if (el % 2 !== 0 ) {
          sum += el;
        }
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));