function solve(array){
    let areEqual = false;

    for (let i = 0; i < array.length; i++) {
        let rightSum = 0;
        
        for (let j = array.length - 1; j > i; j--) {
            let element = array[j];
            rightSum += element;
        }

        let leftSum = 0;
        for (let k = 0; k < i; k++) {
            let element = array[k];
            leftSum += element;
        }

        if(leftSum === rightSum){
            console.log(i);
            areEqual = true;
        }
    }
    if(!areEqual){
        console.log('no')
    }
}
solve([1, 2])