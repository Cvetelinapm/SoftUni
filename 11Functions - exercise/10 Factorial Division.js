function solve(intOne, intTwo){
    function factorial(num){
        num = Number(num);
        let sum = 1;
        for (let i = 0; i < num; i++) {
            let element = (num - i);
            sum = sum * element;           
        }
        return sum;
    }
    function divide(numOne, numTwo){
        let result = (numOne / numTwo);
        return result.toFixed(2);
    }
    
    let factorialIntOne = factorial(intOne);
    let factorialIntTwo = factorial(intTwo);
    let result = divide(factorialIntOne, factorialIntTwo);

    console.log(result);
}
solve(6, 2)