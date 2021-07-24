// Closure

/*
==> A closure is the combination of a function and the 
lexical environment within which that function was declared. 

==> This environment consists of any local variables that were 
in-scope at the time the closure was created.

==> In JavaScript, closures are created every time a function 
is created, at function creation time.
*/

{
    function outerCode() {
        var a = 10, b = 20 , c = 30;
        var str = "Hello";
        function innerCode() {
            var d = 40;
            console.log(a+" "+b+" "+c);
            console.log(str);
        }
        return innerCode;
    }

    var outerCodeVar = outerCode(); // returns you inner code

    console.dir(outerCodeVar); // structure called as closure
}


var globalVar = 50;

function outerInc() {
    var aCounter = 10, bCounter = 20, cCounter = 30;
    function innerInc() {
        var innerCounter = 10;
        aCounter++; // closure
        bCounter++;
        cCounter++;
        innerCounter++; // local scope
        globalVar++; // global scope
        console.log(globalVar+" "+innerCounter+" "+aCounter+" "+bCounter+" "+cCounter);
    }

    return innerInc;
}

var x = outerInc();

x();
x();
x();

x = outerInc();// returns innerInc with new closure
x(); 

{
    // Variable Hoisting(var declaration goes on top)

    // without strict mode

    console.log(str);
    var str = "Hello";

    // with strict mode

//   "use strict" // does not make any difference
    console.log(anotherStr); // o/p - undefined
    var anotherStr = "Welcome";

    myString = "Hello";
    console.log(myString); // o/p - Hello
    var myString;

    // Function Hoisting
    // Function declaration and def. goes on top

    func();

    function func() {
        console.log("Learning Function Hoisting");
    }
}

{
    // try catch block 
    try {
        adddlert("Welcome guest!");
      }
      catch(err) {
        console.log(err.message);
      }
      console.log("This statement should be printed after error");
}