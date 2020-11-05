// 1) Create a function named promise1. It shouldn't take any parameters. Will be building the body (code block) as we progress. Your code should look like this @ this point:
function promise1() {

}

// 2) Inside of our promise1 function we want to return a promise object. To do this will want return new Promise() as the first line of our code block. Your code should look like this @ this point:
function promise1() {
    return new Promise();
}

// 3) We want to pass in a our callback function into the Promise constructor. Our callback should have two parameters, resolve & reject (in that order) at this point your code should look like this;
function promise1() {
    return new Promise((resolve, reject) => {

})
}

// 4) Next we're going to just resolve our promise. To do this we call resolve() (if you placed something different inside of the callback parameters i.e. (res, rej) you'll want to call res() not resolve() then) you code function should like like this;
function promise1() {
    return new Promise((resolve, reject) => {
        resolve();
    })
};

// 5) Next we're going to call our function (promise1) that returns a promise so we'll have to do a .then() & a .catch(). You function call should look like this:
promise1()
.then()
.catch()

// 6) Both .then() & .catch() take callback functions as well as parameters. For our .then() callback lets just have the callback console.log('success') and then for our .catch have it console.log('there was an error'). Your function call should look like this now:
promise1()
.then(() => { console.log('success') })
.catch(() => { console.log('there was an error')})

// 7) Ok, lets create a new function named promise2, it should accept a parameter of errorBoolean it will also return a promise, just like the one we did in promise1. It should look like:
function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {

})
}

// 8) Ok, now I want you to write an if statement that checks if errorBoolean is true, the code block for the if statement should call reject() you'll want to pass in 'There was an error' into reject. You code should look like this:
function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        if(errorBoolean) {
            reject('There was an error');
        }
    })
}

// 9) Lets add an else off of our if statement in case we didn't get an error. Our else block will want to call resolve() and pass in 'Your data you asked for.' into it. Your code should look like this:
function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        if(errorBoolean) {
            reject('There was an error');
        } else {
            resolve('Your data you asked for.');
        }
    })
}

// 10) Now we need to call our promise2 function. Call it passing in both true and false. On your .then() and .catch() for each call (one passing in true, the other passing in false) You should capture the data passed from the resolve or reject call in the callback of your .then() or .catch() and write it to the console. I want to you to try this on your own. If you can't do it your code should look like this --> https://codepen.io/hbull5/pen/gOMjamR

// 11) Now we're going to create some promises stored in variables. I recommend using const for these. I'll walk you through the first two and then you'll have to make the last one on your own. For the first variable were going to name if promise3 it should instantitate a new Promise object, in our callback it should resolve('promise 3 complete'); Your code should look like this:
const promise3 = new Promise((resolve, reject) => { resolve('promise 3 complete') });

// 12) For our second promise we're going to store it in the promise4 variable. It should also instantiate a new promise object. In our callback it should reject('There was an error w/ promise 4'). Your code should look like this:
const promise4 = new Promise((resolve, reject) => { reject('There was an error w/ promise 4')});
// NOTE: You're probably going to see an error in you console like "unhandled promise something something something" that is OK

// 13) For our third promise we're going to store it in the promise5 variables. It should instantiate a new promise object. in our callback it should resolve the string 'promise 4 complete' HINT: pretty close to promise3. If you're having alot of trouble ping me and I can help you with this

// 14) Here we're going to want to call our .then() and .catch() on promise4. Both .then() & .catch() should store w/e is resolved or rejected and then console log it. Your code should look like this:
promise3
.then(data => { console.log(data) })
.catch(err => { console.log(err) })

// 15) Now lets wait for all of our promises to complete then do something. We can do this with Promise.all(). Promise.all() takes one parameter, an array of promises. So we'll want to pass an array of promise3, promise4, & promise5 into the all method. Promise.all() also has a .catch() & .then() so we'll need to call those afterwards and log all of our data from them as we have been. Your code should look like this:
Promise.all([promise3, promise4, promise5])
.then(data => { console.log(data) })
.catch(err => { console.log(err) })

// 16) Lets change modify (DO NOT MAKE A NEW JUST UPDATE THE OLD ONE) our promise4 so that instead of rejecting it resolves, it should resolve with "Promise 4 complete". Your code should look like this:
const promise4 = new Promise((resolve, reject) => { resolve('Promise 4 complete') });

// 17) Now that when we call Promise.all() just as we did before we should recieve an array of our resolves your code should look like:
Promise.all([promise3, promise4, promise5])
.then(data => { console.log(data) })
.catch(err => { console.log(err) })

// 18) Looking at the examples from class: https://github.com/HBull5/ajax_promises/blob/main/app.js in app.js at the bottom. I want you to create an AJAX request to the chuck norris joke generator http://www.icndb.com/api/ <-- (documentation). This time I want you to get a specific joke, joke with the id of 15. Read through the documentation and see if you can figure it out. HINT: look for the "Fetching a specific joke" heading. console.log your joke as just a string. i.e. You want this -->"When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket." NOT --> "{ "type": "success", "value": { "id": 15, "joke": "When Chuck Norris goes to donate blood, he declines the syringe, and instead requests a hand gun and a bucket.", "categories": [] } }" If you can't figure it out checkout this --> https://codepen.io/hbull5/pen/VwjBvOz

// BONUS) Make a bunch of other requests the the chuck norris API play around with some promises make sure to push them so I can see you work!