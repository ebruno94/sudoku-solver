import $ from 'jquery';

export function Sudoku(){
  this.squares = new Array(81);
  this.squares.fill(0);
}

function checkRows(squares){
  let mySquares = squares;
  for (var i = 0; i <= 8; i++){
    var startIndex = i * 9;
    var rowResult = 0;
    var tempArray = [];

    for (var j = startIndex; j <= startIndex + 8; j ++){
      rowResult += mySquares[j];
      if (tempArray.includes(mySquares[j])) {
        return false;
      } else if (mySquares[j] !== 0){
        tempArray.push(mySquares[j]);
      };
    };

    if (rowResult > 45){
      return false;
    };
  };
  return true;
}

function checkColumns(squares){
  let mySquares = squares;
  for (var i = 0; i <= 8; i++){
    var colResult = 0;
    var tempArray = [];
    for (var j = i; j <= 81; j += 9){
      colResult += mySquares[j];
      if (tempArray.includes(mySquares[j])) {
        return false;
      } else if (mySquares[j] !== 0){
        tempArray.push(mySquares[j]);
      };
    };
    if (colResult > 45){
      return false;
    };
  };
  return true;
}

function checkBoxes(squares){
  let mySquares = squares;
  let myIndices = [0, 3, 6, 27, 30, 33, 54, 57, 60];
  for (let a = 0; a < myIndices.length; a++){
    let boxTotal = 0;
    let tempArray = [];
    for (var i = 0; i <= 2; i++) {
      boxTotal += mySquares[myIndices[a]+(9*i)];
      if (tempArray.includes(mySquares[myIndices[a]+(9*i)])){
        return false;
      } else if ((mySquares[myIndices[a]+(9*i)]) !== 0){
        tempArray.push(mySquares[myIndices[a]+(9*i)]);
      };
      boxTotal += mySquares[(myIndices[a]+1)+(9*i)];
      if (tempArray.includes(mySquares[(myIndices[a]+1)+(9*i)])){
        return false;
      } else if ((mySquares[myIndices[a]+(9*i)]) !== 0){
        tempArray.push(mySquares[myIndices[a]+(9*i)]);
      };
      boxTotal += mySquares[(myIndices[a]+2)+(9*i)];
      if (tempArray.includes(mySquares[(myIndices[a]+2)+(9*i)])){
        return false;
      } else if ((mySquares[myIndices[a]+(9*i)]) !== 0){
        tempArray.push(mySquares[myIndices[a]+(9*i)]);
      };
    };
    if (boxTotal > 45) {
      return false;
    };
  };
  return true;
}

Sudoku.prototype.checkSelf = function() {
  return (checkRows(this.squares) && checkColumns(this.squares) && checkBoxes(this.squares));
}

Sudoku.prototype.solveSelf = function() {
  var emptyIndices = [];
  let mySquares = this.squares;
  let that = this;
  for (var i = 0; i < this.squares.length; i++) {
    if (this.squares[i] === 0) {
      emptyIndices.push(i);
    };
  };

  var placeNumber = function(currentIndex, i) {
    let j = i;
    if (i === 10) {
      mySquares[emptyIndices[currentIndex]] = 0;
      return false;
    };
    mySquares[emptyIndices[currentIndex]] = i;
    let bool = that.checkSelf();
    if (!bool) {
      if (i >= 9) {
        mySquares[emptyIndices[currentIndex]] = 0;
        return false;
      } else if (i < 9) {
        j++;
        return placeNumber(currentIndex, j);
      }
    } else if (bool){
      return true;
    }
  };

  var backtrackNumbers = function() {
    let currentIndex = 0;
    let startingInt = 1;
    console.log("backtracking ...");
    while (currentIndex < emptyIndices.length) {
      let bool = placeNumber(currentIndex, startingInt);
      if (bool) {
        currentIndex++;
        startingInt = 1;
      } else if (!bool) {
        currentIndex--;
        startingInt = mySquares[emptyIndices[currentIndex]]+1;
      };
    };
  };

  backtrackNumbers();
}
