// // Let's create Mac D drive thru with the js we learnt

function takeOrder(a) {
  return a * 10;
}

// single parameter
function isPlacedOrder(total) {
  if (total > 0) {
    return true;
  }
  return false;
}

// multiple return and parameters
function canDrive(orderAmmount, ammountpaid) {
  if (orderAmmount == ammountpaid) {
    return true;
  }
  return "Pay your bills you filthy human!";
}

// no parameters and no return types
function greetingMessage() {
  console.log("Welcome to code MacD well which is weird!");
}

greetingMessage();
console.log(takeOrder(4));
console.log(isPlacedOrder(takeOrder(4)));
console.log(canDrive(40, 40));

// scope
{
  function canDriveCar(age) {
    if (age >= 18) {
      var str = "wow you can drive!";
      console.log(age + "is good!" + str);
    } else {
      str = "yay";
      // var str -> block scope
      // str -> global variable 
      // no declaration and you used straight definition thus it had to create a global scope
      console.log(age + "is good" + str);
    }
    console.log("well i didn't expect that" + str); // undefined or what?
    // yay
    // you want to use your variable declare, define use and well don't be stupid
  }

  canDriveCar(18);
  canDriveCar(12);
}

// value and type of

{
  var a = "suraj";
  var b = 1;
  var c = true;
  var d = null;
  var e = undefined;

  console.log(typeof (a));
  console.log(typeof (b));
  console.log(typeof (c));
  console.log(typeof (d));
  console.log(typeof (e));

  console.log(d == e); // vvimp
  console.log(d === e);
  console.log(d == null);
  console.log(e == undefined);

  // object
  var obj1 = {
    attr1: 1,
    attr2: "two",
    attr3: false,
  };

  obj1["anotherAttribute"] = "yay"; // '' and "" is same in js
  console.log(obj1);
  console.log(obj1.attr2);

  // Array
  var array = [1, "two", true, obj1];

  console.log(typeof (array)); // obj

  console.log(array);

  // array[3]["attr1"] // logcially looks as 2D array
  //  array[3].attr1;
  // use [] for arrays and . for objects
}

