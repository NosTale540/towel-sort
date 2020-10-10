module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix == null) return result;
    for (let i = 0; i < matrix.length; i++) {
        (i + 1) % 2 === 0 ? result = result.concat(matrix[i].reverse()) : result = result.concat(matrix[i]);
    }
    return result;
}
