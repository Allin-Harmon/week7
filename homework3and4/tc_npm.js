    try {
    //step 2
        foo();
    // step 3
    } catch (err) {
        console.log(err.message);
    // step 5
    } finally {
        console.log('This is always executed');
    }
    

// step 6
function fizz () {
    throw new Error('My error message');
}

// step 7
function buzz () {
    try {
        fizz();
    } catch (err) {
    console.log(err);
    }
}
