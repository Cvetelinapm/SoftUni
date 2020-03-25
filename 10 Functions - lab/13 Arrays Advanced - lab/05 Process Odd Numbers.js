function solve(array){
    let oddArray = [];

    for (let i = 0; i < array.length; i++) {
        if(i % 2 !== 0){
            let element = array[i];
            let doubledEl = element * 2;
            oddArray.push(doubledEl);
        }
    }
    let reversed = oddArray.reverse();
    console.log(reversed.join(' '))
}
solve([10, 15, 20, 25])