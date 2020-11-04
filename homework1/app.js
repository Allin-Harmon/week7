// 1) Get the h1 nested inside a div, store it in a variable named heading
const heading = document.querySelector('h1'); //? Changed to const b/c well never want this to point at a different <h1> if we did should probably make a new variable specifically for that one as well.
// console.log(heading1);

// 2) Modify the content of the h1 tag so instead of "Heading" it states "Generic Heading"
// heading.textContent = 'Generic Heading';
heading.textContent = `Generic ${heading.textContent}`; //? A round about way to accomplish the same thing, just demoing some of the stuff you can do w/ JS. I would recommend actually accomplishing as you had above.

// 3) Get all paragraphs inside of the div, store it in a variable named paragraphs
const paragraphs = document.querySelectorAll('p');
// const paragraphs = document.getElementsByTagName('p'); //? Returns HTML collection, use this for some of the examples below

// 4) Using classList or className give all the paragraphs the class of blue. HINT: depending on whether or not you used querySelectorAll(), getElementsByTagName(), or already turned it into an array will determine which methods you have available. An old school for loop should for all of them though
//? We can use the forEach loop her b/c querySelectorAll() returns a nodeList, and nodeLists have a forEach method.
paragraphs.forEach((para) => {
	para.classList.add('blue');
});

//? If you had an HTML collection

//? This option should work for HTML collections, nodeLists, & arrays as they all can be accessed by indexes and have a length property
// for (let i = 0; i < paragraphs.length; i++) {
// 	paragraphs[i].classList.add('blue');
// }

//? Make our HTML collection an array and then we can do a for..of, a forEach, or still an old school for loop like above.
// const arrayOfParas = Array.from(paragraphs);
// for (const para of arrayOfParas) {
// 	para.classList.add('blue');
// }

// 5) Add a fourth paragraph with the text content of "new paragraph" to our div that contains the three other paragraphs. HINT: You'll need to get the <div> element, you can store it in a variable like we've seen in the past or you can actually do it all on one line. you can do this w/ document.createElement(), createTextNode(), & appendChild. OR you can use the .innerHTML (make sure not to overwrite the existing paragraphs)
const paraDiv = document.querySelector('div');
console.log(paraDiv);
paraDiv.innerHTML += `<p>New paragraph</p>`; //! 10/10 good work

// 6) .Create an array of where the elements are some of your hobbies. i.e. const hobbies = ['reading', 'travel', 'writing']
const arr1 = ['gaming', 'drawing', 'building models'];
console.log(arr1);

// 7) Create a loop that loops through each element of your array and append each element between <li> tags inside of your <ul> HINT: You'll need to get the <ul> element, you'll need to store it in a variable
const ulList = document.querySelector('ul');

for (var i = 0; i < arr1.length; i++) {
	ulList.innerHTML += `<li>${arr1[i]}</li>`; //! Great work
}

// 8) Get the form tag and store it in a variable named form.
const form = document.querySelector('form');
console.log(form);

// 9) Add an event listener on buttons, listening for the click event. You should prevent the default behavior of the form. i.e. it shouldn't submit. Check if the event target's id is go if so apply the go class to the event target. Check if the event target's id is stop, it so apply the stop class to the event target. HINT: event delegation

// const btnGo = document.querySelector('#go');
// const btnStop = document.querySelector('#stop');
// console.log(btnGo.id, btnStop.id);

form.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target);
	if (e.target.id === 'go') {
		// btnGo.classList.add('go'); //! We're checking if e.target has an id with the value of "go", therefore if that is true we know that e.target === document.querySelector('#go'). In other works e.target is btnGo already so we can cut some code out. If you prefer to do it the way you have this is absolutely fine as this works as is.
		e.target.classList.add('go'); //? If this is still confusing happy to explain it in a little more detail or w/ some more examples
	} else if (e.target.id === 'stop') {
		// btnStop.classList.add('stop');
		e.target.classList.add('stop');
	}
});
