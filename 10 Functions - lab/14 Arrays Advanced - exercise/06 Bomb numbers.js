function solve(array, specialNumbers){
    let specialNum = specialNumbers[0];
    let power = specialNumbers[1];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];
    
        if(element === specialNum){
            let initialIndex = Math.max(0, index - power);
            let endIndex = (power*2 + 1)
            array.splice(initialIndex, endIndex);
            index = -1
        }
    }

    let result = 0;
    for (const num of array) {
        result += num;
    }
    console.log(result)
}
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    )
 