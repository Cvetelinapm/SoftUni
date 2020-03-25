function solve(arr){
    let newArr = arr.map(Number);
    let sumEven = 0;
    let sumOdd = 0;
    newArr.forEach(element => {
        if(element % 2 === 0){
            sumEven += element;
        }else{
            sumOdd += element;
        }
    });
    let result = sumEven - sumOdd;
    console.log(result)
}
solve([1,2,3,4,5,6])