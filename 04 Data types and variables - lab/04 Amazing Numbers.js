function solve(num){
    num = num.toString();
    let sum = 0;
for (let i = 0; i < num.length; i++) {
    let digit = Number(num[i]);
    sum += digit;   
}
let result = sum.toString().includes('9');
console.log(result
    ? `${num} Amazing? True`
    : `${num} Amazing? False`);
}
solve(1233)