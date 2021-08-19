const sumLargestNumbers = function(data) {
  // Put your solution here
  let num1 = 0;
  let num2 = 0;
  for( let number of data) {
    if (num1 < number) {
      num2 = num1;
      num1 = number;
    }  
  }
  return num1 + num2;
}; 

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
 



