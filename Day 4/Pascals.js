function generatePascalsTriangle(rows) {
    const triangle = [];
  
    for (let i = 0; i < rows; i++) {
      triangle[i] = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
  
    return triangle;
  }
  
  function printPascalsTriangle(rows) {
    const triangle = generatePascalsTriangle(rows);
  
    for (let i = 0; i < rows; i++) {
      const spaces = ' '.repeat(rows - i);
      const rowValues = triangle[i].join(' ');
      console.log(spaces + rowValues);
    }
  }
  
  const numRows = 5; //number here
  printPascalsTriangle(numRows);
  