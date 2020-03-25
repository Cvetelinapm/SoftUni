function solve(number){
let input = number.toString();
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < input.length; i++) {
    const element = Number(input[i]);

    if(element % 2 === 0){
        sumEven += element;
    }else{
        sumOdd += element;
    }
}
console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
solve(3495892137259234)