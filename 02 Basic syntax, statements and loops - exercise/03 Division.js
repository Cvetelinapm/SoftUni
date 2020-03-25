function solve(num){
    let output = '';
    let divisivle = true;
if(num % 10 === 0){
    output = 10;
}else if(num % 7 === 0){
    output = 7;
}else if(num % 6 === 0){
    output = 6;
}else if(num % 3 === 0){
    output = 3;
}else if(num % 2 === 0){
    output = 2;
}else{
    console.log('Not divisible');
    divisivle = false;
}
if(divisivle){
    console.log(`The number is divisible by ${output}`)
}
}
solve(30)