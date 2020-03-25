function solve(array, input){
    let [elementsToTake, elementToDelete, targetNum] = input;
    let arrayToManipulate = array.splice(0, elementsToTake);

    arrayToManipulate.splice(0, elementToDelete);

    let arrayOfTargetNum = arrayToManipulate.filter(x => x === targetNum);
    let occuranceotTargetNum = arrayOfTargetNum.length;

    console.log(`Number ${targetNum} occurs ${occuranceotTargetNum} times.`)
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )