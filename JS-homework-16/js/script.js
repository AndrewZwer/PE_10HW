let userNumber = prompt("Enter a number higher or equal 0 to find it factorial");

function findFactorial(num) {
    if (num == 0) {
        return 1;
    }
    if (num !== 1) {
        return num * findFactorial(num - 1);
    }
    else {
        return num;
    }
}

while (userNumber === null || userNumber === "" || isNaN(Number(userNumber)) || userNumber < 0) {
    userNumber = prompt("Prohibited value. Enter a number higher or equal 0", userNumber);
}

let result = findFactorial(userNumber);

console.log(result);