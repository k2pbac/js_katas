const numberOfVowels = function(data) {
  // Put your solution here
  let count = 0;
  if(data.length > 0) {
    for(let i = 0; i < data.length; i++) {
      if(['a','e','i','o','u'].indexOf(data[i]) >= 0) {
        count++;
      }
    }
  }
  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));

