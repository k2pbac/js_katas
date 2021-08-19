const squareCode = function(message) {
  let shortMessage = message.replaceAll(" ", "");
  let numCols = Math.ceil(Math.sqrt(shortMessage.length));
  let numRows = Math.ceil(shortMessage.length / numCols); 

  return getSquare(shortMessage, numCols, numRows).join(" ");

};

const getSquare = function(message, numCols, numRows) {
  let squaredMessage = [];
  let tempMessage = "";
  
  for (var x = 0; x <= numRows; x++) {
    for (var y = 0; y < numRows * numCols; y += numCols){
      if(typeof message[y+x] !== "undefined" && squaredMessage.length < numCols) {
        tempMessage += message[y+x];
      }
    }
    squaredMessage.push(tempMessage);
      tempMessage = "";
  }

  return squaredMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));