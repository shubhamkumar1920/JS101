// output 1, 2, 3 asynchronously in the console.

var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 3000);
});

promise.then(function(data) {
    setTimeout(() => console.log(data + ' 1'), 3000);
});

promise.then(function(data) {
    console.log(data + ' 2');
});

promise.then(function(data) {
    console.log(data + ' 3');
});

console.log("before promise");