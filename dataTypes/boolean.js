//More on Booleans

//Truthy and Falsey values

//Like I mentioned before, true and false are not limited to just straight booleans. All data types can have boolean values, technically speaking. Here's what falsey values look like:

const string = ""
const number = 0
const array = []
const object = {}

//And of course, the obvious one:
const boolean = false

// Notice the similarities, they're all just 'no data' empty strings, arrays and objects, and the number zero, are ALL falsey values, and they are the only way each type can be falsey

//A string that has even a single letter, any number that's not zero, an array with one index, and an object with one property would all be considered truthy.
//We can use truthy and falsey values differently in our conditional statements too, by just stating the name of the variable.
//Here's a function that takes in a variable, and tells you if it's truthy or falsey:
function checkTruth(data) {
    if (data) { // no need for === , if we just put the name of the variable we're checking, it will know it is looking for a truthy value.
        console.log("This is truthy!");
    }

    if (!data) { //Same thing in this case, but the ! operator when placed in front of a variable will check for a falsey value instead.
        console.log("This is falsey!");
    }
}

//There's no methods associated with booleans as they're very simple, so that's it!