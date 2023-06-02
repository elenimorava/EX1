function findLargestSquareSubMatrix(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let maxSize = 0;
    let maxRow = 0;
    let maxCol = 0;
  
    // Krijojme nje matrice qe te mbaje permasat e matrcies se re
    const sizes = Array.from(Array(numRows), () => Array(numCols).fill(0));
  
   
    for (let row = 0; row < numRows; row++) {
      sizes[row][0] = matrix[row][0];
    }
    for (let col = 0; col < numCols; col++) {
      sizes[0][col] = matrix[0][col];
    }
  
    for (let row = 1; row < numRows; row++) {
      for (let col = 1; col < numCols; col++) {
        if (matrix[row][col] === 1) {
          // gjejme permasen e  nenmatrices katrore maksimale ne interacionin qe jemi
          const size = Math.min(
            sizes[row - 1][col],
            sizes[row][col - 1],
            sizes[row - 1][col - 1]
          ) + 1;
          sizes[row][col] = size;
  
          // gjejeme permasen maksimale e nenmatrcies
          if (size > maxSize) {
            maxSize = size;
            maxRow = row - size + 1;
            maxCol = col - size + 1;
          }
        }
      }
    }
  
    return { maxSize, startRow: maxRow, startCol: maxCol };
  }


const matrix = [
    [0, 1, 0, 1, 1],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0]
  ];
  
  const result = findLargestSquareSubMatrix(matrix);
  console.log(result);
  


  
