class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        return 'Hi ' + this.firstname;
    }
}

var john = new Person('John', 'Doe'); 

console.log(john.greet());

// How to set the prototype ?

class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return 'Yo ' + this.firstname;
    }

}

var tony = new InformalPerson("Tony", "Doe");

console.log(tony.greet());

// extends keyword sets the prototype
console.log(InformalPerson.__proto__);