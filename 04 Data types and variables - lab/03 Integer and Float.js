function solve(first, second, third){
let sum = first + second + third;
sum % 1 === 0 
? sum += ' - Integer'
: sum += ' - Float'
console.log(sum)
}