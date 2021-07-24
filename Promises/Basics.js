

// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result

// A Promise is a JavaScript object that links producing code and consuming code

// The executor should call only one resolve or one reject. Any state change is final.
// All further calls of resolve and reject are ignored

// Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.


// Promises are really great when you need to do something thst's going to take a long time in the background such as 
// downloading an image from a different server and you just want to do something after it's complete instead of making
// everything else wait for and also you can catch it to see if it's failed so that you can retry it or you can give error
// message to the user


let promise = new Promise((resolve, reject) => {
    let a = 2 + 3;

    if(a == 5) {
        resolve("Success");
    } else {
        reject("Failed");
    }
})

promise.then((message) => {
    console.log("This is in then : "+ message);
}).catch((message) => {
    console.log("This is in catch : " + message);
})


// Callbacks

const userLeft = false;
const userWatchingMeme = false;

function watchTutorialCallback(callback, errorCallback) {
    if(userLeft) {
        errorCallback({
            name: 'user left',
            message: ':('
        })
    } else if (userWatchingMeme) {
        errorCallback({
            name: 'user watching cat meme',
            message: 'WebdevSimplified < cat'
        })
    } else {
        callback('Thumsup and subscribe')
    }
}

watchTutorialCallback((message)=> {
    console.log('Success' + message);
}, (error) => {
    console.log(error.name + error.message);
})

// Replacing Callbacks with Promise

const userLeft = false;
const userWatchingMeme = false;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if(userLeft) {
            reject({
                name: 'user left',
                message: ':('
            })
        } else if (userWatchingMeme) {
            reject({
                name: 'user watching cat meme',
                message: 'WebdevSimplified < cat'
            })
        } else {
            resolve('Thumsup and subscribe')
        }
    }) 
}

watchTutorialPromise().then((message)=> {
    console.log('Success' + message);
}) .catch ((error) => {
    console.log(error.name + error.message);
});


// Promise.all and Promise.race

// Let’s say we want many promises to execute in parallel and wait until all of them are ready.
// For instance, download several URLs in parallel and process the content once they are all done.
// That’s what Promise.all is for.

// Promise.all takes an array of promises and returns a new promise.
// The new promise resolves when all listed promises are settled, and the array of their results becomes its result.

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
  })
  
  const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
  })
  
  const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
  })
  
  Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(messages => {         // Output:
    console.log(messages)  // ["Video 1 Recorded", "Video 2 Recorded", "Video 3 Recorded"]
  })
  
  // Similar to Promise.all, but waits only for the first settled promise and gets its result (or error).
  
  Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
  ]).then(message => {      // Output:
    console.log(message)    // Video 1 Recorded
  })
