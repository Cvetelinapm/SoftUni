function solve(number){
    function average(num){
        num = num.toString();
        let sum = 0;
        let counter = 0;
        for (let digit of num) {
            counter++
            sum += Number(digit);
        }
        let average = sum / counter;
        return average
    }
    let result = average(number);
    while (result <= 5) {
        number = number + '9'
        result = average(number);
    }
    console.log(number)

}
solve(101)