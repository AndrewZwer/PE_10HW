let firstNumber = getNumber();
let secondNumber = getNumber();
let counter = getCounterNumber();

function getNumber() {
    let number = Number(prompt("Enter a number"));

    while(isNaN(number) || number.length === 0 || number === null) {
        number = Number(prompt("Your enter is incorrect. Please, enter a number"));
    }

    return number;
}

function getCounterNumber() {
    let number = Number(prompt("Enter a position of the Fibonachi's number^ what do you want to see"));

    while(isNaN(number) || number.length === 0 || number === null || number < 1){
        number = Number(prompt("Your enter is incorrect. Please, enter a number, that will be bigger than 0"));
    }

    return number;
}

function fibonachiNumber (num1, num2, count) {
    if (num1 === 0 && num2 === 0) {
        alert("Both of you numbers is equal 0. No number order for this zero's. Reload the page, and start again");
        return 0;
    }
    let result = num1 + num2;
    if (count > 1) {
        num1 = num2;
        num2 = result;
        return fibonachiNumber(num1, num2, count - 1);
    }
    else {
        return result;
    }
}

console.log(fibonachiNumber(firstNumber, secondNumber, counter));

