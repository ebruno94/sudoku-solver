import { Sudoku } from './sudoku.js';
import $ from 'jquery';
import "../css/styles.css";
import "../css/bootstrap.css";

$(document).ready(function(){
  var sudokus = new Array();
  var testSudoku = new Sudoku();
  var currentSudokuId = 0;
  testSudoku.squares = [0, 0, 0, 2, 6, 0, 7, 0, 1, 6, 8, 0, 0, 7, 0, 0, 9, 0, 1, 9, 0, 0, 0, 4, 5, 0, 0, 8, 2, 0, 1, 0, 0, 0, 4, 0, 0, 0, 4, 6, 0, 2, 9, 0, 0, 0, 5, 0, 0, 0, 3, 0, 2, 8, 0, 0, 9, 3, 0, 0, 0, 7, 4, 0, 4, 0, 0, 5, 0, 0, 3, 6, 7, 0, 3, 0, 1, 8, 0, 0, 0];
  var testSudoku2 = new Sudoku();
  testSudoku2.squares = [0, 4, 3, 2, 6, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 3, 0, 8, 9, 1, 0, 5, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 4, 4, 7, 0, 0, 1, 0, 0, 3, 8, 8, 0, 0, 0, 0, 4, 0, 7, 0, 0, 0, 0, 7, 0, 6, 1, 8, 0, 1, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 9, 1, 3, 2, 0];
  var testSudoku3 = new Sudoku();
  testSudoku3.squares = [0, 3, 0, 0, 0, 0, 9, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 1, 0, 3, 0, 0, 0, 0, 9, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 4, 0, 8, 0, 0, 7, 0, 0, 2, 0, 8, 5, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 7, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 1];
  sudokus.push(testSudoku);
  sudokus.push(testSudoku2);
  sudokus.push(testSudoku3); 
  console.log("I'm reading main!");
  console.log(testSudoku.squares);
  console.log("Result of test on testSudoku: " + testSudoku.checkSelf());

  var listSudokus = function() {
    $("#sidebar .container .row:not(.h2)").remove();
    let boxHtml = '<div class="col-md-4 miniSudokuBox">' +
                    '<div class="row">' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                    '</div>' +
                    '<div class="row">' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                    '</div>' +
                    '<div class="row">' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                      '<div class="col-md-4 miniSudokuSquare">' +
                        '<input type="text" pattern="[0-9]" value="">' +
                      '</div>' +
                    '</div>' +
                  '</div>';

    sudokus.forEach(function(sudoku) {
      $("#sidebar .container").append('<div class="row miniSudoku"></div>');
      for (let i = 0; i <= 8; i++) {
        $("#sidebar .container > .row").last().append(boxHtml);
        let tempArray = $("#sidebar .container > .row:last-child .miniSudokuBox:eq(" + i + ") .miniSudokuSquare").toArray();
        let myIndices = [0, 3, 6, 27, 30, 33, 54, 57, 60];
        for (let j = 0; j <= 2; j++) {
          $(tempArray[0 + j*3]).addClass("s" + (myIndices[i]+(9*j)));
          $(tempArray[1 + j*3]).addClass("s" + (myIndices[i]+1+(9*j)));
          $(tempArray[2 + j*3]).addClass("s" + (myIndices[i]+2+(9*j)));
        };
      };

      $(".miniSudoku:last").click(function() {
        $(".miniSudoku").removeClass("sudokuSelected");
        $(this).addClass("sudokuSelected");
      });

      for (let i = 0; i <= 80; i++) {
        $("#sidebar .container > .row:last-child .s" + i + " input").val(sudoku.squares[i]);
      };
    });
  }

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
      mySudoku.squares[i] = (/[\d]/.test($("#s"+i+" input").val())) ? parseInt(($("#s"+i+" input")).val()) : 0;
    };
    console.log(mySudoku.squares);
    console.log("Result of test on testSudoku: " + mySudoku.checkSelf())
    sudokus.push(mySudoku);
    listSudokus();
  });

  $("#arrayToBoard").click(function() {
    for (var i = 0; i <= 80; i++) {
      $("#s" + i + " input").val(sudokus[currentSudokuId].squares[i]);
    };
    $("input[value='0']").val(" ").text(" ");
  })

  $("#solveBoard").click(function() {
    sudokus[currentSudokuId].solveSelf();
  })

  $("#playChosenBoard").click(function() {
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
    $("#sudokuBoard").empty();

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

    for (i = 0; i <= 80; i++) {
      console.log($(".miniSudoku[class='row miniSudoku sudokuSelected']").index());
      $("#s" + i + " input").val(sudokus[$(".miniSudoku[class='row miniSudoku sudokuSelected']").index()-1].squares[i]);
    };

    currentSudokuId = $(".miniSudoku[class='row miniSudoku sudokuSelected']").index() - 1;


  })

  listSudokus();
});
