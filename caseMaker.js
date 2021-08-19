const camelCase = function(input) {
  let newString = "";
  let camel = false;
  
  if (input && input.length > 0) {
    for (var i = 0; i < input.length; i++) {
      if( input[i] !== " ") {
        if (camel == true) {
          newString += input[i].toUpperCase();
        }
        else{
        newString += input[i];
        }
        camel=false;
      }
      else {
        camel = true;
      }
    }
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));