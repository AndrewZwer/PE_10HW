let name = prompt("What is your name?"),
    age = Number(prompt("How old are you?"));

do {
    	name = prompt("What is your name?", name);
    	age = Number(prompt("How old are you?", age));
} while (name === null || name.length === 0 || age === 0 || isNaN(age) );

if (age < 18) {
    alert("You are not allowed to visit this website");
}

if (age >= 18 && age <= 22) {
    let conf = confirm("Are you sure you want to continue?");

    if (conf) {
        alert(`Welcome, ${name}`);
    }
    else {
    	alert("You are not allowed to visit this website");
    }
}

if (age > 22) {
    alert(`Welcome, ${name}`);
}
