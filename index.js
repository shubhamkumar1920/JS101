// console.log("Damn! Hello world! from another JS page!")

// I am a single line comment

/*
    I am a multi line comment
*/

var a = 42;
var b = "I am a string";
var c = true;
// prints are by default as strings

console.log(a+b); // 42I am a string
console.log(a+c); // 43

console.log(b+c);//I am string true

// Maths operator

var a = 2;
var b = 3;
var c = 4;
var d=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/2);
console.log(a%b);

console.log(a++); // 2
console.log(a--); // 3 

a +=4;
console.log(a); // 6
a=42;
var anotherA = "42";
var justTrue ="true";
var deepTrue = true;

// equality

//shallow equality 

console.log(a == anotherA);
console.log(justTrue == deepTrue);

// Strict equality 

console.log(justTrue === deepTrue);

console.log("Here we go!")
// maths equality
a =3;
b=2;
c=5;
d=7;

console.log(a<b);
console.log(c<=d);

// logical operations

console.log( a<b && c <d); 


// values which are permissable in js for now we will talk about only numbers, strings and booleans


// coercion

var e = true;
var f = false;

// implicit coercion
console.log(a + e); 

// i.e a= 3 and e = true e -> true =1 by js internally and thus ans will be 4

console.log(a+"some string"); // number is converted into string 

// ans = 3some string

console.log(f + "some string"); // boolean converted to String

// explicit coercion

console.log(a + Number(e));

console.log(String(a)+ "some string");

// here we have made changes accordingly and thus we know what to do! always prefer explicit coercion over impl
// cause implicit js coercion gives weird answers sometimes

// static and dyanamic typing

var someVariable =2;
console.log(someVariable);
someVariable = "some variable";
console.log(someVariable);

someVariable  = true;
console.log(someVariable);



// Let's talk about some constants in native js

var PERCENTAGE_OF_COOL_KIDS_I_HAVE = 100;

// blocks

if(PERCENTAGE_OF_COOL_KIDS_I_HAVE == 100) {
    console.log("Damn Array! Quite a batch you have!");
}else{
    console.log("How could you be so heartless!")
}
