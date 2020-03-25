function solve(n, inputArr){
    let arr = [];
    for (let i = 0; i < n; i++) {
        let element = inputArr[i];
        arr.push(element);
    }
    arr.reverse()

    console.log(arr.join(' '))
}
solve(3, [10, 20, 30, 40, 50])