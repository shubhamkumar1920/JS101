
// Pure Prototypal Inheritance


// If we forget to write this in getFullName method then it will look
// for firstname & lastname on the global execution context
// if its not there we will get error as "firstname & lastname not defined"

var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
}

// creates an empty object & on it's proto we have person object
var john = Object.create(person);


// to hide the properties and methods of person object
// add properties and methods on newly created objects so that JS engine will
// not go down the prototype chain
john.firstname = "John";
john.lastname = "Doe";

console.log(john);