
function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log("This function is invoked.");
  //  return {greeting: "I got in the way"}
}

var john = new Person("John","Doe");
console.log(john);

var jane = new Person("Jane","Doe");
console.log(jane);

