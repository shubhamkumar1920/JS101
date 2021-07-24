

// "async and await make promises easier to write"

// async makes a function return a Promise
// await makes a function wait for a Promise to settle
// (wait until that promise settles and returns its result.)


// await keyword can only be used inside async function
// otherwise you have to use .then/.catch

function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making request to ${location}`)

        if(location == 'Google') {
            resolve('Google says Hi')
        } else {
            reject('We only talk to Google');
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response');
        resolve(`Extra information ${response}`)
    })
}
/*
makeRequest('Google').then((response) => { // try changing 'Google' to 'Facebook'
    console.log('Response Received');
    return processRequest(response);
}).then((processResponse) => {
    console.log(processResponse);
}).catch((error) => {
    console.log(error);
})
*/

// Above code using async & await

async function doWork() {
    try {
        const response = await makeRequest('Google');
        console.log('Response Received');
        const processResponse = await processRequest(response);
        console.log(processResponse);
    } catch (error) {
        console.log(error);
    }

}

doWork();