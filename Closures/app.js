// classic example of closures

// function buildFunctions() {
//     var arr = [];

//     for(var i = 0; i < 3; i++) {
//         arr.push(
//             function() {
//                 console.log(i);
//             }
//         );
//     }

//     return arr;
// }

// var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();
function myFunction() {
    var a=window.prompt("enter your name");
    var b=window.prompt();
    // let sum=a+b;
    let sum=Number(a)+Number(b);
    console.log(sum);
    // if (person != null) {
    //   document.getElementById("demo").innerHTML =
      "Hello ! How are you today?" +sum;
    // }
  }

myFunction();


// To get the output as 0,1,2 using ES6

// function buildFunctions2() {
//     var arr = [];

//     for(var i = 0; i < 3; i++) {
//         let j = i;
//         arr.push(
//             function() {
//                 console.log(j);
//             }
//         );
//     }

//     return arr;
// }

// var fs2 = buildFunctions2();

// fs2[0]();
// fs2[1]();
// fs2[2]();

// // To get the output as 0,1,2 using ES5
// // using IIFE

// function buildFunctions3() {
//     var arr = [];

//     for(var i = 0; i < 3; i++) {

//         arr.push(
//             (function(j){
//                 return function() {
//                     console.log(j);
//                 }
//             }(i))
//         );
//     }

//     return arr;
// }

// var fs3 = buildFunctions3();

// fs3[0]();
// fs3[1]();
// fs3[2]();