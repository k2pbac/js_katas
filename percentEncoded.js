const urlEncode = function(text) {
  // Put your solution here
  let newText = "";
  if(text && text.length > 0) {
    for (var i = 0; i < text.length; i++) {
      if(text[i] == " ") {
        newText += "%20";
      }
      else {
      newText += text[i];
      }
    }
  }
  return newText;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));