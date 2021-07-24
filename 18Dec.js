var starwars = [
    "Episode 4: A New Hope",
    "Episode 5: The Empire Strikes Back",
    "Episode 6: Return of the Jedi",
    "Episode 1: The Phantom Menace",
    "Episode 2: Attack of the Clones",
    "Episode 3: Revenge of the Sith",
    "Episode 7: The Force Awakens",
  ];

  console.log(starwars.indexOf("Episode 4: A New Hope"));
  console.log(starwars.lastIndexOf("Episode 4: A New Hope"));
  console.log(starwars.length);

 //slice and splice

 // The splice() method changes the contents of an array 
 // by removing or replacing existing elements and/or adding new elements

// slice--> returns section of the array without removing
console.log(starwars.slice(2,4)); // end point is exclusive

// splice--> returns deleted elements of the array
console.log(starwars.splice(0,5));
console.log(starwars); // 5 elements are removed by splice

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// function scopes

{
    function sum(x, y) {
      return x + y;
    }
  
    function nestedFunc1(a, b) {
      console.log(a);
      console.log(z); // expected here?
      {
        var z = 5;
        console.log(a + b);
      }
    
    }
    sum(2,3);
    nestedFunc1(2,3);

    function func1() {
        console.log("I am func 1");
        return function func2() {
            console.log("I am func 2");
        }
    }
      
    func1();

    var x = func1();
    // func1 returns func2 which will be assigned to x
    // x is now a function (func2)
    x();

    function func1() {
        console.log("I am func 1");
        return function func2() {
            console.log("I am func 2");
            return function func3() {
                console.log("here I am !");
            }
        }
    }

    func1()()(); // 3 levels of nesting

    function calculateTax(a,b) {
        return function calculateNum(b) {
            return a*b;
        }
    }

    var x = calculateTax(18); // GST value(a) is fixed

    console.log(x(5)); // items quantity(b) can change
    console.log(x(10));
    console.log(x(15));

    var y = calculateTax(10);

    console.log(y(5));

}
    
  
    