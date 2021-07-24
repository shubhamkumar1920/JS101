// Old browsers don't support Object.create()
// To overcome this we use polyfill

// Polyfill: Code that adds a feature which the engine may lack.

if(!Object.create) {
    Object.create = function(o) {
        if(arguments.length > 1) {
            throw new Error ('Object.create implementation' 
            + ' Only accepts the first parameter');
        }

        function F() {}
        F.prototype = o;
        return new F();
    };
}

var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
}

// creates an empty object & on it's proto we have person object
var john = Object.create(person);

john.firstname = "John";
john.lastname = "Doe";

console.log(john);