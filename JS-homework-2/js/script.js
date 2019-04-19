let userNum = prompt("Please, enter an integer multiple of 5");

function check(numbers) {
    if (numbers === null || isNaN(Number(numbers)) || (Number(numbers) % 1 !== 0) || numbers.match(/\s/) || numbers.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

while ( check(userNum)) {
    userNum = prompt("Your enter is not correct!!! Please, enter an integer multiple of 5");
}

if ( userNum >= 0 && userNum < 5) {
    console.log("Sorry, no numbers");
}

for (let i = 5; i <= userNum; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}

alert("Good work. Now, I want to ask you to enter two numbers, and console will show you all prime numbers between them. " +
      "Remember!!!! First number must be smaller than second and both of them must be integer. Lets do it))))");

let firstNum = prompt("Enter a first number");
let secondNum = prompt("and last number");

while( Number(firstNum) > Number(secondNum) || check(firstNum) || check(secondNum) ) {
    alert("Maaaan, one of your numbers or both of them is incorect, be more attentive.");
    firstNum = prompt("One more attempt. First number isssss......");
    secondNum = prompt("And second number .......");
}

for (;firstNum <= secondNum; firstNum++) {
    for (let j = 2; j <= firstNum; j++) {
        if (firstNum === j) {
            console.log(`Prime number: ${firstNum}`);
        }
        if (firstNum % j === 0 ) {
            break;
        }
    }
}