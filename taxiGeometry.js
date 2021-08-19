const blocksAway = function(directions) {

  let destination = {east: 0, north: 0};
  let newDirections = directions.filter(el => el === "right" || el === "left");
  let distances = directions.filter(el => el !== "right" && el !== "left");
  let currentDirection = "";
  let maxGrid = 6;

  for ( var i = 0; i < newDirections.length; i++ ) {
    switch ( newDirections[i] ) {
      case "right":
        if(currentDirection == ""){
        destination.east += distances[i];
        currentDirection = "east";
        }
        else if(currentDirection == "north" && destination.east + distances[i] <= maxGrid){
        destination.east += distances[i];
        currentDirection = "east";
        }
        else if(currentDirection == "south" && destination.east - distances[i] >= 0) {
        destination.east -= distances[i];
        currentDirection = "west";
        }
        else if(currentDirection == "west" && destination.north + distances[i] <= maxGrid ){
        destination.north += distances[i];
        currentDirection = "north";
        }
        else if(currentDirection == "east" && destination.north - distances[i] >= 0 ) {
          destination.north -= distances[i];
          currentDirection = "south";
        }
        break;
      case "left":
        if(currentDirection == "" && destination.north + distances[i] <= maxGrid) {
          destination.north += distances[i];
          currentDirection = "north";
        }
        else if(currentDirection == "north" && destination.east - distances[i] >= 0) {
          destination.east -= distances[i];
          currentDirection = "west";
        }
        else if(currentDirection == "south" && destination.east + distances[i] <= maxGrid ){
          destination.east += distances[i];
          currentDirection = "east";
        }
        else if(currentDirection =="east" && destination.north + distances[i] <= maxGrid) {
          destination.north += distances[i];
          currentDirection = "north";
        }
        else if(currentDirection == "west" && destination.north - distances[i] >= 0) {
          destination.north -= distances[i];
          currentDirection = "south";
        }
        break;
    }
  }
return destination;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
