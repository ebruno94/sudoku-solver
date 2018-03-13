import {Sudoku} from './sudoku.js';

$("#produceBoard").click(function(){
  let boxHtml = '<div class="col-md-4 sudokuBox">' +
                  '<div class="row">' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                  '</div>' +
                  '<div class="row">' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                  '</div>' +
                  '<div class="row">' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                    '<div class="col-md-4 sudokuSquare">' +
                    '</div>' +
                  '</div>' +
                '</div>';

  for (var i = 0; i <= 8; i++) {
    $("#sudokuBoard").append(boxHtml);
    var tempArray = $("#sudokuBoard sudokuBox:eq(" + i + ")").toArray();
    for (var i = 0)
    myIndices.forEach(function(startIndex) {
      let boxTotal = 0;
      for (var i = 0; i <= 2; i++) {
        boxTotal += mySquares[startIndex+(9*i)];
        boxTotal += mySquares[(startIndex+1)+(9*i)];
        boxTotal += mySquares[(startIndex+2)+(9*i)];
      };
  }

});
