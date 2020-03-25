function solve(arr) {

    let sumRow = arr.map((col => {
        return col.reduce((a, b) => a + b);
    }));

    let sumCol = arr.reduce((r, a) => {
        return r.map((b, i) => a[i] + b);
    });

    let allEqual = array => {
        return array.every(v => v === array[0]);
    };

    return allEqual(sumRow) && allEqual(sumRow) && sumRow.toString() === sumCol.toString();

}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])