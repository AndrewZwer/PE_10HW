function reWriteValue (newValue, definedProperty) {
    Object.defineProperty(this, definedProperty, {
        configurable: true,
        writable: true,
        value: newValue
    });

    Object.defineProperty(this, definedProperty, {
        configurable: true,
        writable: false
    })
}

function setBirthDate() {
    let birthDate = prompt("Please, write your birth date at format dd.mm.yyyy");

    let birthDateValidation = function (date) {
        if (date === null) {
            return false;
        }

        let dateArr = birthDate.split(".", 3);

        for (let i = 0; i < dateArr.length; i++) {
            if (isNaN(Number(dateArr[i]))) {
                return false;
            }
        }

        if (dateArr.length < 3 ||
            (dateArr[0].length !== 2 || dateArr[0] < 1 || dateArr[0] > 31) ||
            (dateArr[1].length !== 2 || dateArr[1] < 1 || dateArr[1] > 12) ||
            (dateArr[2].length !== 4 || dateArr[2] < 1900 || dateArr[2] > (new Date).getFullYear())) {
            return false;
        }

        return true;
    };

    while (!(birthDateValidation(birthDate))) {
        birthDate = prompt("Your birth date is incorrect, Please, write your real birth date at format dd.mm.yyyy");
    }

    return birthDate;
}

function CreateNewUser(name, surname) {
    this.setFirstName = function (name) {
        if (name === undefined || name.length === 0 || name.match(/[^a-z]/i)){
            console.log("Your first name enter is invalid");
            return 0;
        }
        else {
            reWriteValue.bind(this, name, "firstName");
            return name;
        }
    };

    this.setLastName = function (surname) {
        if (surname === undefined || surname.length === 0 || surname.match(/[^a-z]/i)){
            console.log("Your first name enter is invalid");
            return 0;
        }
        else {
            reWriteValue.bind(this, surname,"lastName");
            return surname;
        }
    };

    Object.defineProperties(this, {
        "firstName": {
            value: this.setFirstName(name),
            writable: false
        },

        "lastName": {
            value: this.setLastName(surname),
            writable: false
        },

        "birthday": {
            value: setBirthDate()
        }
    });

    this.getLogin = function () {
        if (this.firstName && this.lastName) {
            console.log((this.firstName.charAt(0) + this.lastName).toLowerCase());
        }
        else {
            console.log("Cannot generate a special string. Your name or surname is not right");
        }
    };

    this.getAge = function () {
        let birthdayStrReverse = this.birthday.split(".", 3).reverse().join(".");
        let todayDate = new Date;
        let birthdayDate = new Date(birthdayStrReverse);
        let age = todayDate.getFullYear() - birthdayDate.getFullYear();

        if (todayDate.getMonth() < birthdayDate.getMonth()) {
            age --;
        }
        if (todayDate.getMonth() === birthdayDate.getMonth() && todayDate.getDay() < birthdayDate.getDay()) {
            age --;
        }

        console.log(`Your age is ${age} years`);
    };

    this.getPassword = function () {
        console.log(this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + this.birthday.slice(6));
    };
}

let newUser = new CreateNewUser("Andrew", "Volkov");

newUser.getLogin();

newUser.getAge();

newUser.getPassword();

