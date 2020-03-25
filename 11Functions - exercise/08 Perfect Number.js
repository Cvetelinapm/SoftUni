function solve(number){

    function findDivisors(num){
        let divisors = [];
        for (let i = 1; i < num; i++) {
            if(num % i === 0){
                divisors.push(i);
            }
        }
        return divisors;
    }
    let arrayOfDivisors = findDivisors(number);

    function sumDivisors(arr){
       let sum =  arr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);
        return sum; 
    }

    let result = sumDivisors(arrayOfDivisors);

    if(result === number){
        console.log('We have a perfect number!');
    }else{
        console.log('It\'s not so perfect.')
    }
}
solve(1236498)