let whiteQueen = [0, 2];
let blackQueen = [5, 0];
const generateBoard = function(q1, q2) {
  let board = [];
  let tempRow = [];

    for (var x = 0; x< 8; x++) {
      for ( var y = 0; y < 8; y++){
        if (q1[0] == x && q1[1] == y){
          tempRow.push(1);
        }
        else if( q2[0] == x && q2[1] == y){
          tempRow.push(1);
        }
        else {
          tempRow.push(0);
        }
      }
      board.push(tempRow);
      tempRow = [];
    }
    return board
}

const queenThreat = function(board) {
  let queenCol = -1;
  let queenRow = -1;
  let queenFoundCol = 0;
  let queenFoundRow = -1;
  for( let x = 0; x < board.length; x++) {
    for( let y = 0; y < board[x].length; y++){

      if (board[x][y] == 1){
        if (queenFoundRow == -1) {
          queenRow = x; queenCol = y;
          queenFoundCol = y;
        }
        else if(queenFoundCol == y){
          return true;
        }
        queenFoundRow++;
      }

      if (queenCol !== -1 && queenRow !== -1 && x > queenRow) {
        if ((board[x][queenCol - x] == 1 || board[x][queenCol + x] == 1)){
          return true;
        }
      }

      //Check if queens on same row
      if(queenFoundRow > 1){
        return true;
      }

    }
    queenFoundRow = 0;
  }
  return false;
};


let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

 