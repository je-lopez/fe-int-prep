// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected
// 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

var maxAreaOfIsland = function(grid) {
  let maxArea = 0;
  const visitedCells = {};

  const findArea = (row, col, grid) => {
      let area = 0;
      const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
      const queue = [[row, col]];

      while (queue.length > 0) {
          let [currRow, currCol] = queue.shift();

          if (!visitedCells[currRow]) {
            visitedCells[currRow] = {};
          }

          if (currRow >= 0 && currCol >= 0 && currRow < grid.length && currCol < grid[0].length && !visitedCells[currRow][currCol]) {
              visitedCells[currRow][currCol] = true;

              if (grid[currRow][currCol] === 1) {
                  area += 1;

                  for (let dir of directions) {
                      queue.push([currRow + dir[0], currCol + dir[1]]);
                  }
              }
          }
      }

    return area;
  };

  for (let row = 0; row < grid.length; row++) {
      if (!visitedCells[row]) {
        visitedCells[row] = {};
      }

      for (let col = 0; col < grid[0].length; col++) {
          if (grid[row][col] === 1 && !visitedCells[row][col]) {
              const area = findArea(row, col, grid);

              if (area > maxArea) maxArea = area;
          }
      }
  }

  return maxArea;
};