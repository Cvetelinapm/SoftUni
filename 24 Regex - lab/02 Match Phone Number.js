function solve(numbers){
let validNum = [];
let pattern = /\B\+359([ -])2\1\d{3}\1\d{4}\b/g;
let result = pattern.exec(numbers);
while(result){
    validNum.push(result[0]);
    result = pattern.exec(numbers);
}
console.log(validNum.join(', '))
}
solve('+359 2 222 2222, +359-2-222-2222	359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359-2-222-222, +359-2-222-22222')