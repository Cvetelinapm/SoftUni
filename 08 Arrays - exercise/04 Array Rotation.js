function solve(originalArr, rotation){
    let array = originalArr;

    for (let i = 0; i < rotation; i++) {
        let first = array[0];
        array.shift();
        array.push(first)
    }
    console.log(array.join(' '))
}
solve([51, 47, 32, 61, 21], 2)