//; step 1 - 4 
function promise1() {
    return new Promise((resolve, reject) => {
        resolve();
    })
};

/// step 5 - 6
promise1()
    .then(() => { 
        console.log('success P1') 
    })
    .catch(() => {
        console.log('there was an error P1')
    })

// step 7 - 9
function promise2(errorBoolean) {
    return new Promise((resolve, reject) => {
        if(errorBoolean) {
            reject('There was an error');
        } else {
            resolve('Your data you asked for.');
        }
    })
}

// step 10 
promise2(true)
    .then((data) => {
        console.log(data) 
    })
    .catch((err) => {
        console.log(err)
    })

promise2(false)
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

// step 11 
const promise3 = new Promise((resolve, reject) => { resolve('promise 3 complete') });

// step 12
// const promise4 = new Promise((resolve, reject) => { reject('There was an error w/ promise 4') }); // original

const promise4 = new Promise((resolve, reject) => { resolve('promise 4 complete') }); //modified

// step 13
const promise5 = new Promise((resolve, reject) => { resolve('promise 5 complete') });

// step 14
promise3
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

// step 15
Promise.all([promise3, promise4, promise5])
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

// step 16
// Refer to step 14

// step 17
Promise.all([promise3, promise4, promise5])
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

// step 18
const nerUl = document.querySelector('#nerdy');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.icndb.com/jokes/random?limitTo=[nerdy]', true);

xhr.onload = function () {
	console.log(this.responseText);
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
	nerUl.innerHTML += `<li>${joke}</li>`;
};

xhr.send();

//bonus
const funUl = document.querySelector('#funny');

let xhr1 = new XMLHttpRequest();

xhr1.open('GET', 'http://api.icndb.com/jokes/random?', true);

xhr1.onload = function () {
	console.log(this.responseText);
	const joke = JSON.parse(this.responseText).value.joke;
	console.log(joke);
	funUl.innerHTML += `<li>${joke}</li>`;
};

xhr1.send();