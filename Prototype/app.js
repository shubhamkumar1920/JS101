var a = {};
var b = function() {};
var c = [];

var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
}

var john = {
    firstname: "John",
    lastname: "Doe",
}

// don't do this EVER! for demo purpose only
john.__proto__ = person;

// loop over every member on the object
for(var prop in john) {
    if(john.hasOwnProperty(prop)) {
        console.log(prop + ": " + john[prop]);
    }
}

var jane = {
    address: "111 Main St.",
    getFormalFullName: function() {
        return this.lastname + ", " + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

_.extend(john, jane, jim);
// Takes all the properties and methods of jane and jim and add them 
// to the john object (No need to use prototype)

console.log(john);
console.log(john.getFirstName()); // ReferenceError: firstname is not defined
// if we define firstname on the global execution context, JS engine will print that firstname on the console(instead of john object's firstname)