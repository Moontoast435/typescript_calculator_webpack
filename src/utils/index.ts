type Operation = 'Add' | 'Subtract' | 'Multiply' | 'Divide'

function handleOperation(operation : Operation, num1 : number, num2 : number) {
    switch (operation) {
        case "Add":
            return num1 + num2;
            break;
        case "Subtract":
            return num1 - num2
            break;
        case "Multiply":
            return num1 * num2;
            break;
        case "Divide":
            return num1 / num2;
            break;
        default:
            break;
    }
}

console.log(handleOperation("Multiply", 2, 5000));
