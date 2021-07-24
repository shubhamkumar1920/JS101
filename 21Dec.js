// nested function

function add(a) {
    return function addSecondNumber(b) {
        return a+b;
    }
}

var x = add(10); 

console.log(x); // return function 

console.log(x(5)); // ans = 15

// IIFE 

var result = (function () { var name = "Harry";
                return name;})();

console.log(result);

{
    function calculateTotal(a) {
        'use strict';
        var sum = 0;
        a.forEach(element => {
           sum += element;
           (function () {console.log("added logo")})(); 
        });
    }

    var vegetables = [10, 20 , 30, 40];
    calculateTotal(vegetables);
}

// strict functions

function funcA () {
    // non-strict block
    a = 5;
    console.log(a);
}

function funcB () {
    // strict block
    "use strict";
//    b = 5;
//    console.log(b);
}

funcA();
funcB();

