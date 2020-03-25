function solve(str) {
    let arr = str.split('').filter((l, i, arr) => l !== arr[i+1]);
    console.log(arr.join(''))
}
solve('aaaaabbbbbcdddaeeeedssaa')