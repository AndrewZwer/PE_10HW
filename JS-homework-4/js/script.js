function CreateNewUser() {
    Object.defineProperties(this, {
        "firstName": {
            set: function setFirstName (name) {
                if (name === null || name.length === 0 || name.match(/[^a-z]/i)){
                    console.log("Your first name enter is invalid");
                    return 0;
                }
                else {
                    return this._firstName = name;
                }
            },
            get: function (){
                return this._firstName;
            }
        },

        "lastName": {
            set: function setLastName (name) {
                if (name === null || name.length === 0 || name.match(/[^a-z]/i)){
                    console.log("Your last name enter is invalid");
                    return 0;
                }
                return this._lastName = name;
            },
            get: function (){
                return this._lastName;
            }
        }
    });

    this.getLogin = function () {
        console.log((this.firstName.charAt(0) + this.lastName).toLowerCase());
    }
}

let newUser = new CreateNewUser();

newUser.firstName = prompt("Enter your first name");
newUser.lastName = prompt("Enter your last name");

newUser.getLogin();