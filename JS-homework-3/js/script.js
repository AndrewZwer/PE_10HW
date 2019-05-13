let firstNumber = getNumber();
let secondNumber = getNumber();
let mathOperator = getMathOperator();

function getNumber () {
    return prompt("Enter a number");
}

function getMathOperator () {
    return prompt("Enter the math operator from +, -, *, /");
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

while (firstNumber === null || isNaN(Number(firstNumber)) || firstNumber.match(/\s/) || firstNumber.length === 0) {
    firstNumber = getNumber();
}

while (secondNumber === null || isNaN(Number(secondNumber)) || secondNumber.match(/\s/) || secondNumber.length === 0) {
    secondNumber = getNumber();
}

while (!(mathOperator !== "+" || mathOperator !== "-" || mathOperator !== "*" || mathOperator !== "/")) {
    mathOperator = getMathOperator();
}

mathOperation(firstNumber, secondNumber, mathOperator);






// OLD VERSION

// let firstNumber = prompt("Enter first number");
// let secondNumber = prompt("Enter second number");
// let mathOperator = prompt("Enter the math operator from +, -, *, /");
//
// function incorrectNumberEnter(userNumberEnter) {
//     if (userNumberEnter === null || isNaN(Number(userNumberEnter)) || userNumberEnter.match(/\s/) || userNumberEnter.length === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
// function correctMathOperator(operator) {
//     if (operator === "+" || operator === "-" || operator === "*" || operator === "/" ) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
// while (incorrectNumberEnter(firstNumber) || incorrectNumberEnter(secondNumber) || !(correctMathOperator(mathOperator))) {
//     if (incorrectNumberEnter(firstNumber)) {
//         firstNumber = prompt("Your first enter is incorrect, please, enter a number...");
//     }
//     if (incorrectNumberEnter(secondNumber)) {
//         secondNumber = prompt("Your second enter is incorrect, please, enter a number...");
//     }
//     if (!(correctMathOperator(mathOperator))) {
//         mathOperator = prompt("Your enter isn't a math operator from +, -, *, /. Please, try again...");
//     }
// }
//
// function mathOperation(firstNum, secondNum, operator) {
//     switch (operator) {
//         case "+":
//             console.log(firstNum + secondNum);
//             break;
//         case "-":
//             console.log(firstNum - secondNum);
//             break;
//         case "*":
//             console.log(firstNum * secondNum);
//             break;
//         case "/":
//             console.log(firstNum / secondNum);
//             break;
//     }
// }
//
// mathOperation(firstNumber, secondNumber, mathOperator);

