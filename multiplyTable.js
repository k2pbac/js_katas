const multiplicationTable = function(maxValue) {
  let table = "";
  let col = 1;
  let row = 1;
  if(maxValue > 0){
    while (row <= maxValue) {
      while ( col <= maxValue) {
        table += ( row * col) + " ";
        col++;
      }
      table+="\n";
      col = 1;
      row++;
    }
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));