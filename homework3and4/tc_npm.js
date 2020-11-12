try {
  //step 2
  foo();
  // step 3
} catch (err) {
  console.log(err.message);
  // step 5
} finally {
  console.log("This is always executed");
}

// step 6
function fizz() {
  throw new Error("My error message");
}

// step 7
function buzz() {
  try {
    fizz();
  } catch (err) {
    console.log(err.message);
  }
}

//! So a couple things here. Make sure you call the buzz() function afterwards so you can see how the try catch is working with the errors. Also, as I explained in google meet, if you use the throw new Error(''), which you did on line 14, you will have to call the error using (err.message) as opposed to (err). You can test this in your console by calling the buzz() function, which i added below this comment

buzz();
