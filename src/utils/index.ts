
function handleOperation(operation : string, num1 : number, num2 : number) {
    switch (operation) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            if (num2 != 0) {
            return num1 / num2;
            }

            return "Cannot divide by zero!";
            break;
        default:
            return "invalid operation"
            break;
    }
}
// const num1 = prompt("Type the first number");
// const operator = prompt("Type the operation");
// const num2 = prompt("Type the second number");
// console.log("Result: " + handleOperation(operator, parseFloat(num1), parseFloat(num2)));
