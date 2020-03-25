function solve(array){
    let newArr = array.map(Number);
    let modifiedArr = [];
    let sumOld = 0;
    let sumNew = 0;

    for (let i = 0; i < newArr.length; i++) {
        let element = newArr[i];
        sumOld += element;
        if (element % 2 === 0) {
            element += i;
            modifiedArr.push(element);
        }else{
            element -= i;
            modifiedArr.push(element)
        }
        sumNew += element;
        
    }

    console.log(modifiedArr);
    console.log(sumOld);
    console.log(sumNew)
    
}
solve([5, 15, 23, 56, 35])