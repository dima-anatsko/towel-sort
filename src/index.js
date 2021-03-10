// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let result = [];
    if (matrix.length === 0) {
        return result;
    }
    let trend = true;
    for (let item of matrix) {
        item = trend ? item : item.reverse();
        result.push(...item);
        trend = !trend;
    }
    return result
};
