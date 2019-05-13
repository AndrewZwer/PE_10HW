let firstNumber = getNumber();
let secondNumber = getNumber();
let mathOperator = getMathOperator();

function getNumber () {
    let number = prompt("Enter a number");
    while (number === null || isNaN(number) || number.match(/\s/) || number.length === 0) {
        number = prompt("Enter is incorect. Enter a corect number");
    }
    return number;
}

function getMathOperator () {
    let operator = prompt("Enter the math operator from +, -, *, /");
    while (!(operator === "+" || operator === "-" || operator === "*" || operator === "/")) {
        operator = prompt("Enter is incorect. Enter on of the symbol from +, -, *, /");
    }
    return operator;
}

function mathOperation(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            console.log(+(firstNum) + +(secondNum));
            break;
        case "-":
            console.log(firstNum - secondNum);
            break;
        case "*":
            console.log(firstNum * secondNum);
            break;
        case "/":
            console.log(firstNum / secondNum);
            break;
    }
}

mathOperation(firstNumber, secondNumber, mathOperator);