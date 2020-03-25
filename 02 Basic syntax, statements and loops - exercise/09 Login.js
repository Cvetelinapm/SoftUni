function solve(input){
let pass = input.shift();
let newPass = pass.split('').reverse().join('');

let counter = 1;
let password = input.shift();
let isBlocked = false;
while (password !== newPass) {
    if(counter === 4){
        console.log(`User ${pass} blocked!`);
        isBlocked = true;
        break;
    }
    console.log('Incorrect password. Try again.');
    counter++
    password = input.shift();

}
if(!isBlocked){
    console.log(`User ${pass} logged in.`)
}
}
solve([ 'Acer', 'login', 'go', 'let me in', 'recA' ])