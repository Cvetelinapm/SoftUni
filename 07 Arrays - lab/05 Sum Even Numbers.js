function solve(arr){
    let newArr = arr.map(Number);
    let sum = 0;
    newArr.forEach(element => {
        if(element % 2 === 0){
            sum += element;
        }
    });
    console.log(sum)
}
solve(['1','2','3','4','5','6'])