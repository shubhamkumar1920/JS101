// It can be smart to use getters and setters for your properties, 
// especially if you want to do something special with the value 
// before returning them, or before you set them.

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    get cname() {
      return this.carname;
    }
    set cname(x) {
      this.carname = x;
    }
  }
  
  let myCar = new Car("Ford");
  
  console.log(myCar.cname); // getter

  myCar.cname = "Volvo"; // setter
  // we can also use myCar.carname

  console.log(myCar.cname);

/* points to remember

  ===> even if the getter is a method, you do not use parentheses when you want to get the property value
  ===> To use a setter, use the same syntax as when you set a property value, without parentheses:
  ===> Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property
*/
