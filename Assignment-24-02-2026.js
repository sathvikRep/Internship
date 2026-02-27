// ===============================
// Console Calculator Program
// ===============================

// Function Definitions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
}

// Take user input
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result;

// Perform operation
switch (operator) {
    case "+":
        result = add(num1, num2);
        break;
    case "-":
        result = subtract(num1, num2);
        break;
    case "*":
        result = multiply(num1, num2);
        break;
    case "/":
        result = divide(num1, num2);
        break;
    default:
        result = "Invalid operator!";
}

console.log("Result:", result);