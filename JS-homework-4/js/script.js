function CreateNewUser(name, surname) {
    this.reWriteValue = function (newValue, property) {
        Object.defineProperty(this, "property", {
            configurable: true,
            writable: true
        });

        this.property = newValue;

        Object.defineProperty(this, "property", {
            writable: false
        });
        return this.property;
    };
    this.setFirstName = function (name) {
        if (name === undefined || name.length === 0 || name.match(/[^a-z]/i)){
            console.log("Your first name enter is invalid");
            return 0;
        }
        else {
            return this.reWriteValue(name, this.firstName);
        }
    };

    this.setLastName = function (surname) {
        if (surname === undefined || surname.length === 0 || surname.match(/[^a-z]/i)){
            console.log("Your first name enter is invalid");
            return 0;
        }
        else {
            return this.reWriteValue(surname, this.lastName);
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
        }
    });

    this.getLogin = function () {
        if (this.firstName && this.lastName) {
            console.log((this.firstName.charAt(0) + this.lastName).toLowerCase());
        }
        else {
            console.log("Cannot generate a special string. Your name or surname is not right");
        }
    }
}

let newUser = new CreateNewUser("Andrew", "Volkov");

newUser.getLogin();