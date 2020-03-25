function solve(matrix){
    let counterEqual = 0;
for (let i = 0; i < matrix.length - 1; i++) {
    const array = matrix[i];
    let arrayNeighbor = matrix[i + 1];
    
    for (let j = 0; j < array.length; j++) {
        const element = array[j];
        const elementNeighbor = arrayNeighbor[j];
        if(element === elementNeighbor){
            counterEqual++
        }
    }
}
for (let k = 0; k < matrix.length; k++) {
    let element = matrix[k];
    for (let l = 0; l < element.length - 1; l++) {
        const el = element[l];
        const el2 = element[l + 1];
        if(el === el2){
            counterEqual++
        }
    }
}
console.log(counterEqual)
}
solve([['1', 'yes', 'yo', 'ho']]
)