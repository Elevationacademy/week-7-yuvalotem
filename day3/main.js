function generateMatrix(numRows, numColumns) {
    let matrix = []
    let num = 1
    
    for (let r = 0; r < numRows; r++) {
        matrix.push([])
        for (let c = 0; c < numColumns; c++) {
            matrix[r].push(num++)
        }
    }
    return matrix
}
const matrix = generateMatrix(3, 4)

// for(r of matrix){
//     for(c of r){
//         console.log(c);
//     }
// }
// for(let r = 0; r < matrix.length; r++){
//     for(let c = 0; c < matrix[r].length; c++){
//         console.log(matrix[r][c]);
//     }
// }
// const get = function(row, column){
//     return matrix[row][column]
// }
// console.log(get(1,2));

function print(matrix){
for(r of matrix){
    let row = ''
    for(c of r){
        row += "\t" + c
    }
    console.log(row);
}
}

// function printColumn(matrix, colNum) {
//     for (let i = 0; i < matrix.length; i++) {
//         console.log(matrix[i][colNum])
//     }
// }

// printColumn(matrix, 1) //prints 2, 6, 10 on separate lines

// function printRow(matrix, rowNum){
//     for(let i of matrix[rowNum]){
//         console.log(i);
//     }
// }
// printRow(matrix, 1)


function alter(row, column, num){
    matrix[row][column] = num
}
matrix[1][2] = 42
alter(1, 3, 174)
print(matrix)

