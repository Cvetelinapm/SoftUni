function solve(array){
array.sort((a, b) => b - a);
let sorted = [];

    for (let i = 0; i < (array.length / 2); i++) {
        const element = array[i];
        let nextElement = array[array.length - i - 1];
        if(element === nextElement){
        sorted.push(element);
            break;
        }
        sorted.push(element);
        sorted.push(nextElement);
    }
    console.log(sorted.join(' '))
}
solve([1, 5, 0, 6, 0]); // 65100
