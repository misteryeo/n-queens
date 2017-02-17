/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other 

window.findNRooksSolution = function(n) {
  var solution = [];
  for (var z = 0; z < n; z++) {
    solution.push(Array(n));
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === j) {
        solution[i][j] = 1;
      } else {
        solution[i][j] = 0;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //hardcode solutionCount for n = 1 and n = 2
/*  var solutionCount = undefined;
  if (n === 1 || n === 2) {
    solutionCount = 1;
    return solutionCount;
  }*/

  var solutionCount = 0;
  var board = new Board({'n': n});

  var findSolutionCount = function(board, piecesPlaced) { 
    if (piecesPlaced === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(piecesPlaced, i);
      if (!board.hasRowConflictAt(piecesPlaced) && !board.hasColConflictAt(i)) {
        findSolutionCount(board, piecesPlaced + 1);
      }
      board.togglePiece(piecesPlaced, i);
    }
  };
  findSolutionCount(board, 0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var solutionCount = 0;
  var board = new Board({'n': n});
  var solution;

  if (n === 1) {
    board.togglePiece(0, 0);
    return board.rows();
  }

  if (n === 0 || n === 2 || n === 3) {
    return board.rows();
  }

  var findSolutionCount = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        if (row === n - 1) {
          solution = JSON.stringify(board);
        }
        findSolutionCount(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  findSolutionCount(0);
  var parsedSolution = JSON.parse(solution);
  var finalSolution = [];
  for (var key in parsedSolution) {
    finalSolution.push(parsedSolution[key]);
  }
  finalSolution = finalSolution.splice(0, n);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(finalSolution));
  return finalSolution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({'n': n});

  var findSolutionCount = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueensConflicts()) {
        findSolutionCount(row + 1);
      }
      board.togglePiece(row, i);
    }
  };
  findSolutionCount(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
