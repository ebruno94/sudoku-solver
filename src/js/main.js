import { Sudoku } from './sudoku.js';
import $ from 'jquery';
import "../css/styles.css";
import "../css/bootstrap.css";

$(document).ready(function(){
  var sudokus = new Array();
  var testSudoku = new Sudoku();
  testSudoku.squares = [0, 0, 0, 2, 6, 0, 7, 0, 1, 6, 8, 0, 0, 7, 0, 0, 9, 0, 1, 9, 0, 0, 0, 4, 5, 0, 0, 8, 2, 0, 1, 0, 0, 0, 4, 0, 0, 0, 4, 6, 0, 2, 9, 0, 0, 0, 5, 0, 0, 0, 3, 0, 2, 8, 0, 0, 9, 3, 0, 0, 0, 7, 4, 0, 4, 0, 0, 5, 0, 0, 3, 6, 7, 0, 3, 0, 1, 8, 0, 0, 0];
  sudokus.push(testSudoku);
  console.log("I'm reading main!");
  console.log(testSudoku.squares);
  console.log("Result of test on testSudoku: " + testSudoku.checkSelf()); 


  $("#produceBoard").click(function(){
    let boxHtml = '<div class="col-md-4 sudokuBox">' +
                    '<div class="row">' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                    '</div>' +
                    '<div class="row">' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                    '</div>' +
                    '<div class="row">' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 sudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                    '</div>' +
                  '</div>';

    for (var i = 0; i <= 8; i++) {
      $("#sudokuBoard").append(boxHtml);
      let tempArray = $("#sudokuBoard .sudokuBox:eq(" + i + ") .sudokuSquare").toArray();
      let myIndices = [0, 3, 6, 27, 30, 33, 54, 57, 60];
      console.log("tempArray contains the following number of jquery objects: " + tempArray.length);
      for (var j = 0; j <= 2; j++) {
        $(tempArray[0 + j*3]).attr("id", "s" + (myIndices[i]+(9*j)));
        $(tempArray[1 + j*3]).attr("id", "s" + (myIndices[i]+1+(9*j)));
        $(tempArray[2 + j*3]).attr("id", "s" + (myIndices[i]+2+(9*j)));
      };
    };
  });

  $("#getFirstValue").click(function() {
    console.log($("#s0 input").val());
    console.log(/[\d]/.test($("#s0 input").val()));
  })

  $("#boardToArray").click(function() {
    var mySudoku = new Sudoku();
    for (var i = 0; i <= 80; i++) {
      mySudoku.squares[i] = (/[\d]/.test($("#s"+i+" input").val())) ? $("#s"+i+" input").val() : 0;
    };
    mySudoku.push(mySudoku);
  });

  $("#arrayToBoard").click(function() {
    for (var i = 0; i <= 80; i++) {
      $("#s" + i + " input").val(sudokus[0].squares[i]);
    };
    $("input[value='0']").val(" ").text(" ");
  })

  $("#solveBoard").click(function() {
    sudokus[0].solveSelf();
  })
});
