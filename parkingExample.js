const whereCanIPark = function (spots, vehicle) {
  let location = [];
    //Check if the spots array and vehicle exist and whether they have correct inputs
    if(spots && spots.length > 0 && vehicle && ['regular','small','motorcycle'].indexOf(vehicle) >= 0) {
      
      //Loop through rows of array
      for (let x = 0; x < spots.length; x++) {
        //Loop through cols of array
        for (let y = 0; y < spots[x].length; y++) {
          //Check which vehicle is set
          switch (vehicle) {
            case 'regular':
              //if vehicle is regular and the spot has the required string "R" push the coordinates and return the location
              if(spots[x][y] === "R") {
                location.push(y);
                location.push(x);
                return location;
              }
              break;
            case 'small':
              //if vehicle is small and the spot has the required string "S" or "R" push the coordinates and return the location
              if(["R","S"].indexOf(spots[x][y]) >= 0) {
                location.push(y);
                location.push(x);
                return location;
              }
              break;
            case 'motorcycle':
              //if vehicle is motorcycle and the spot has the required string "R" or "S" or "M" push the coordinates and return the location
              if(["R","S","M"].indexOf(spots[x][y]) >= 0 ) {
                location.push(y);
                location.push(x);
                return location;
              }
              break;
          }
        }
      }
    }
    //if no location was return false, otherwise return location - not necessary to return location as it would have returned already
  return location !== [] ? location : false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))