//More on Functions

//By now, you've seen a few examples of what a function can look like. Here's a reminder:

function printString() {
    console.log("bacon")
}       

const sayBacon = function() {
    console.log("bacon")
}

moreBacon = () => {
    console.log("bacon")
}

//Parameters
    //There's only one part of basic functions we haven't used yet, and that's the parentheses (parens) that come before the actual block of code that executes in the function
    //These are for parameters. Parameters are placeholder values that will be substituted for something else when you run the function. All we've done in the functions above is create (declare) them, but they've never been run.

    //For starters, here's a new function that uses parameters. 

    function multiply(a, b) {
        console.log(a * b)
    }

    //Now that it has parameters, we can run the function and plug in real values for 'a' and 'b'
    //To run (call) a function, we simply state it's name like we would any other variable, but we'll need to add the parens afterwards, and we'll need to declare any parameters we specified or we'll get an error

    //With our first functions, there are no parameters so it looks like this:
    sayBacon()

    //Easy, that will log "bacon" to the console. To call a function with parameters, we do the same thing, but fill in the values as necessary:
    multiply(4, 5) // Will print 20 to the console

    //now that function will execute with the values we passed in, now called "Arguments"
    //Recap: when declaring the function, the variables to be replaced are called 'parameters'. When calling the function, the values they are replaced with are called 'arguments'

//Return
    //Sometimes, we need our function to spit something out after its finished executing so that we can use it later. Currently, our functions just log something to the console, but we can't really do anything with that.
    //If we need our function to result in a certain value, we will need to return it from inside the function. Here's what that looks like:

    function returnMultiply(a, b) {
        return a * b
    }

    //Now the called function will have its own value based on what was passed into it, and we can use the call like almost any variable:
    console.log(returnMultiply(4, 5)) // Will print 20 to the console

    //The result will be the same as line 34, the only difference is we are now logging the result of the called function, rather than logging from inside the function itself. 
    //This is also the case with some of the methods that we can use on certain types data. Here's an example using the toString method:

    const number = 69
    const string = number.toString() //Will return "69"
        //the toString method is a function that, when used on a number, returns the same number, but converted to a string
    
    //Returns are important because, even though the result of a function is often a task that is performed (like putting data on the webpage, logging it to the console, etc.), sometimes we need the result to be some manipulation of the data we passed in, so that we can do something else with it later
    
//That's just about all you need to know about functions for now, go ahead and get into the dataTypes folder to learn more about data types and their methods!