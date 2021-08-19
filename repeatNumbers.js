const repeatNumbers = function(data) {
  let string = "";
  let strings = [];
  if(data) {
    for (var y = 0; y < data.length; y++) {
      for ( let x = 0; x < data[y][1]; x++) {
        string += data[y][0];
      }
      if ( data.length > 1 && y !== data.length-1){
        string += ", ";
      }
    }
  }
  return string;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));