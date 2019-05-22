let userNumber = prompt("Enter a number higher or equal 0 to find it factorial");

let findFactorial = num => num > 1 ? num * findFactorial(num - 1) : 1;

while (userNumber === null || userNumber === "" || isNaN(Number(userNumber)) || userNumber < 0) {
    userNumber = prompt("Prohibited value. Enter a number higher or equal 0", userNumber);
}

let result = findFactorial(userNumber);

console.log(result);