function solve(num1, num2, operation) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;

    switch (operation) {
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
    }


}
let result = solve(5, 5, 'add');
console.log(result)