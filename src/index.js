// You should implement your task here.

module.exports = function towelSort(matrix) {
    let input = matrix;
    let result = [];
    if (matrix == [] || typeof matrix == "undefined") {
        return result;
    } else {
        matrix.forEach((element, x) => {
            if (x % 2 == 0) {
                for (let x = 0; x < element.length; x++) {
                    result.push(element[x]);
                }
            } else {
                for (let k = element.length - 1; k >= 0; k--) {
                    result.push(element[k]);
                }
            }
        });
        return result;
    }
};
