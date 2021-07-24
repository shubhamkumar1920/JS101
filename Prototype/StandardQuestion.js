// the constructor
function SurajArray(...array) {
    // assign array to the instance (this)
    this.arr = array;
  }
  
  // if sumUp does not exist in the prototype, create it
    SurajArray.prototype.sumUp = SurajArray.prototype.sumUp || function() { 
      return this.arr.reduce( (acc, val) => acc + val, 0); 
      //     ^ the instance value
    };
  // create 2 instances
  const sa1 = new SurajArray(10, 20, 30);
  const sa2 = new SurajArray(5, 15, 5);
  console.log(sa1.sumUp());
  console.log(sa2.sumUp());

  console.log(SurajArray.__proto__ ); // base function object 
  console.log(SurajArray.__proto__.__proto__) // base Object

  // Solution with class
  
  class SurajArray extends Array {
      
      sumUp() {
          let ans = this.reduce((result, value) => {
              result = result + value;
              return result;
          }, 0);
          return ans;
      }
  }
  
  const newArr = new SurajArray(1, 2, 3, 4, 5);
  const sum = newArr.sumUp();
  console.log(sum);