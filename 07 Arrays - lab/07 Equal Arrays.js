function solve(arr1, arr2){
    let newArr1 = arr1.map(Number);
    let newArr2 = arr2.map(Number);
    let indexOfDiff = 0;
    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < newArr1.length; i++) {
        let el1 = newArr1[i];
        let el2 = newArr2[i];
        if(el1 !== el2){
            indexOfDiff = i;
            isEqual = false;
            break;
        }else{
            sum += el1;
        }
    }
    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`)
    }else{
        console.log(`Arrays are not identical. Found difference at ${indexOfDiff} index`)
    }
}
solve(['10','20','30'], ['10','20','30'])