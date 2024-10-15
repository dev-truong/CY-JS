//mang dau vao
const matrix = [
    [1,2,3],
    [4,5,6],
    [9,10,11]
]
//Ham chuyen doi ma tran
function swapMatrix(matrix) {
    const newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix[i][j] = matrix[j][i];
        }
        newMatrix[i].reverse();
    }

    return newMatrix;
}
//Ket qua
const result = swapMatrix(matrix);
console.log(result);
