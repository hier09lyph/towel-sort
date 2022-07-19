
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];
  if (matrix === undefined) {
    return arr
  } else {
    if (matrix != arr) {
for (let i = 1; i < matrix.length; i=i+2){
      matrix[i].reverse()
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          arr.push(matrix[i][j]);
        }
    } 
          
    }
    
  return arr
  }
  
      }

