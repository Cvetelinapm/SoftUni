function solve(a, b, c){

    let summedInt = sum(a, b);
    let subtractedInt = subtract(summedInt, c);

    return subtractedInt;
    
    function sum(num1, num2){
        let result = num1 + num2;
        return result
    }

    function subtract(num1, num2){
        result = num1 - num2;
        return result;
    }

}
solve(23, 6, 10)