export function Sudoku(){
  this.squares = new Array(81);
  this.squares.fill(0);
}

function checkRows(squares){
  let mySquares = squares;
  for (var i = 0; i <= 8; i++){
    var startIndex = i * 9;
    var rowResult = 0;

    for (var j = startIndex; j <= startIndex + 9; j ++){
      rowResult += mySquares[j];
    };

    if (rowResult <= 45){
      return true;
    };
  };
  return false;
}

function checkColumns(squares){
  let mySquares = squares;
  for (var i = 0; i <= 8; i++){
    var colResult = 0;
    for (var j = i; j <= 81; j += 9){
      colResult += mySquares[j];
    };
    if (colResult <= 45){
      return true;
    };
  };
  return false;
}

function checkBoxes(squares){
  let mySquares = squares;
  let myIndices = [0, 3, 6, 27, 30, 33, 54, 57, 60];
  myIndices.forEach(function(startIndex) {
    let boxTotal = 0;
    for (var i = 0; i <= 2; i++) {
      boxTotal += mySquares[startIndex+(9*i)];
      boxTotal += mySquares[(startIndex+1)+(9*i)];
      boxTotal += mySquares[(startIndex+2)+(9*i)];
    };
    if (boxTotal <= 45) {
      return true;
    };
  });
  return false;
}

Sudoku.prototype.checkSelf = function() {
  return (checkRows(this.squares) && checkColumns(this.squares) && checkBoxes(this.squares));
}

Sudoku.prototype.solveSelf = function() {
  var emptyIndices = [];
  let mySquares = this.squares;
  let that = this;
  for (var i = 0; i <= this.squares.length; i++) {
    if (this.squares[i] === 0) {
      emptyIndices.push(i);
    };
  };

  var placeNumber = function(currentIndex, i) {
    let j = i;
    mySquares[emptyIndices[currentIndex]] = i;
    let bool = that.checkSelf();
    if (!bool) {
      if (i >= 10) {
        return false;
      } else if (i < 10) {
        j++;
        placeNumber(currentIndex, j);
      }
    } else if (bool){
      return true;
    }
  };

  var backtrackNumbers = function() {
    let currentIndex = 0;
    debugger;
    while (currentIndex <= emptyIndices.length) {
      console.log(mySquares);
      let bool = placeNumber(currentIndex,1);
      if (bool) {
        currentIndex++;
        placeNumber(currentIndex, 1);
      } else if (!bool) {
        currentIndex--;
        placeNumber(currentIndex, mySquares[emptyIndices[currentIndex]]+1);
      };
    };
  };

  backtrackNumbers();
}
