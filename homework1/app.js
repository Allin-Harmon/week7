// 1) Get the h1 nested inside a div, store it in a variable named heading
let heading = document.querySelector('h1');
// console.log(heading1);


// 2) Modify the content of the h1 tag so instead of "Heading" it states "Generic Heading"
heading.textContent = 'Generic Heading';


// 3) Get all paragraphs inside of the div, store it in a variable named paragraphs
const paragraphs = document.querySelectorAll('p');



// 4) Using classList or className give all the paragraphs the class of blue. HINT: depending on whether or not you used querySelectorAll(), getElementsByTagName(), or already turned it into an array will determine which methods you have available. An old school for loop should for all of them though

paragraphs.forEach (para => {
    para.classList.add('blue');
});


// 5) Add a fourth paragraph with the text content of "new paragraph" to our div that contains the three other paragraphs. HINT: You'll need to get the <div> element, you can store it in a variable like we've seen in the past or you can actually do it all on one line. you can do this w/ document.createElement(), createTextNode(), & appendChild. OR you can use the .innerHTML (make sure not to overwrite the existing paragraphs)
const paraDiv = document.querySelector('div');
console.log(paraDiv);
paraDiv.innerHTML += `<p>New paragraph</p>`;


// 6) .Create an array of where the elements are some of your hobbies. i.e. const hobbies = ['reading', 'travel', 'writing']
const arr1 = ['gaming', 'drawing', 'building models'];
console.log(arr1);


// 7) Create a loop that loops through each element of your array and append each element between <li> tags inside of your <ul> HINT: You'll need to get the <ul> element, you'll need to store it in a variable
const ulList = document.querySelector('ul');

for (var i = 0; i < arr1.length ; i++) {
    ulList.innerHTML += `<li>${arr1[i]}</li>`;
};


// 8) Get the form tag and store it in a variable named form.

const form = document.querySelector('form');
console.log(form);


// 9) Add an event listener on buttons, listening for the click event. You should prevent the default behavior of the form. i.e. it shouldn't submit. Check if the event target's id is go if so apply the go class to the event target. Check if the event target's id is stop, it so apply the stop class to the event target. HINT: event delegation 

const btnGo = document.querySelector('#go');
const btnStop = document.querySelector('#stop');
console.log(btnGo.id, btnStop.id)


form.addEventListener('click', e => {
    e.preventDefault();
    console.log(e.target);
    if(e.target.id === 'go') {
        btnGo.classList.add('go');
    } else if (e.target.id === 'stop') {
        btnStop.classList.add('stop');
    }
});