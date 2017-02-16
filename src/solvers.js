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

  
  var board = new Board({'n': n});

  var treesChecked = 0;
  var findSolutionCount = function(tree) {
    // base case 
    if (treesChecked === Math.pow(n, n)) {
      return;
    }
    // recusive case
    for (var i = 0; i < n * n; i++) {
      if (!hasAnyRooksConflicts) {
        solutionCount++;
      }
      treesChecked++;
      findSolutionCount(tree);
    }
  };
  findSolutionCount(tree);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // setup our board 
  // come up with any configuration 
  // check configuration against helper methods
    // if config returns true all methods
    // return solution 
  // else come up with new config 


  // iterate through board (two nested for loops)
    // assign a rook into column 0 row 0 
    // 

  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
