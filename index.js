//Matt's Guide to Javascript

//Data types
//Each of these variables is the name of a data type, the value will be an example of that data type.
var string = "Matt Pearce"
    //Strings are for words, sentences, and other content that is supposed to be read as text.
        //You can use single-quotes, double-quotes, or backticks (`` symbol to the left of the number row on a keyboard: ~ without holding shift) to contain a string
var number = 69
    //Numbers work about the same as strings, the difference is that numbers are not wrapped in quotes and they can be used in functions that involve math. If a number is in quotes, it is a string. 
var boolean = true
    //Booleans can only be true or false, and they are not wrapped in quotes. when a javascript file sees the words true or false out in the open with no quotes, the code will know it is a boolean.
    //Note: Booleans are not as simple as they seem! Even other data types can be treated as a boolean, but instead of true and false, they would be called 'truthy' and 'falsey'. More on this in the dataTypes guide
var object = {
    key: "value",
    name: "data",
    num: 69,
    bool: true
}
    //Objects consist of multiple sets of data called 'key/value pairs' or just 'properties'. Each key is written as plain text, like the name of a variable, and each value can be any type of data, including another object within the larger object
        //Note: you can think of this as a 'name/data' pair too, like the second property of the object. The 'key' is the name of the data, and the 'value' is the data itself.
var array = ["string", 2, false, ["Matt", "Cameron", "Amy"], {object: true}]
    //Arrays are similar to objects. Each piece of data in it is caled an 'index' that can be any type of data, but instead of having a key, each piece of data is simply is referred to by its overall position in the array by number. (It always starts counting from zero!)

    //To use the data we save as variables, all we need to do is type the word we set as the name when we declare the variable

    //Bonus tip: you can hover over a javascript variable in VS Code and it will tell you what its datatype is, but if you do this with an object or an array, it will tell you the type of each individual piece of data in contains. Try this with the variables above

////VANILLA JAVASCRIPT
    // "Vanilla" Javascript is what we call the JavaScript functionality that will work in any Javascript file, without importing any external libraries or tools. There's quite a bit more than what's listed below, but these are the parts you will use the most. More advanced features will be in the following guides.

//console.log
    //This simply prints anything you give it to the console tab in your web browser (you'll have to open developer tools using the F12 key in your browser to see this.)
    console.log("bacon") //will print the string "bacon" to the console
    console.log(string) //will print the value of our string variable to the console: "Matt Pearce"
        //We will use this to demonstrate the effect of almost everything we learn as it's the only way to visualize what Javascript does without building a webpage
        //Don't worry that you can't see this in these demos, you'll have something set up in the exercise so that you can test out your code. For now, I'll just tell you how the logs will behave

//Operators
    //You can think of these as mathematical symbols, you will write them in your code as if that's what they are, but some of them can do a little bit more than that would suggest
    //Math/Logical operators: +, -, *, /, >, <, >=, <=, =, ===, !-- (Left to right: add, subtract, multiply, divide, greater than, less than, greater or equal, less or equal, set to equal, check if equal, check if not equal)
        //More on the last 3 in the section on conditionals
    //Conditional operators: &&, ||, ?, : (Left to right: and, or, if, else)
        //Keep in mind the first two in the section on conditionals. You can use these if you need to check to see if two conditions are met, or if one of several conditions is met using && and ||, respectively.
        //? and : are shorthand for if/else statements in the event that you need to return something from a function, but you will rarely use them
    //Spread operator: ... (You would use this if you wanted to copy something like an array or object before you manipulate it. There's no need to do such things until a pretty advanced level)

//Functions
    //Functions can be declared in a few different ways. You can create one simply by using the word 'function':
    function printString() {
        console.log(string)
        //Will print our string variable: "Matt Pearce"
    }       

    //Or by saving it as a variable:
    var addNumbers = function() {
        console.log(number + 5)
        //Remember that the number data type can be used in math, so this function should print: 74
        //If we change number to a string like this...
        number = "69"
        console.log(number + 5)
        //Our function will print: "695" treating the 5 as a string, as it's being added to one. Javascript has no way of knowing that a string is just numbers until we make it check.

    }

    //Or with an arrow function:
    printObject = () => {
        console.log(object)
        //This will print our object variable
    }
        //All of these functions are just as valid as one-another when declared this way; when to use any one in particular is a little more complicated

    //Methods are functions that can be used on specific types of data. Strings and arrays in particular have many methods that can be applied to manipulate or add to the data they hold.
        //Information on specific methods will in dataTypes, but for now here's an example of an array method:
        array.push("New index")
        //This will add the string in the parentheses to the end of the array variable from line 21

//Conditionals
    //There are two main types of conditional statements in Javascript: if/else, and switch/case
    
    //If statements simply evaluate a statement or variable, and perform a function if the statement is true or 'truthy' (remember to check the dataTypes guide for more information on truthy and falsey values)
    var tutor = string.valueOf()
        //We're making a new variable and assigning the value of our string from above using the valueOf method, just so the code makes more sense

    if (tutor === "Matt Pearce") {
        console.log("The tutor is Matt")
    }
        //Note: the equals sign in the if statement is different than in other places. If you are checking the value of something, you will use '===', instead of '='
        //Think of it like this: '=' means you are TELLING a variable what it equals, and '===' means you are ASKING if it equals something in particular
        //You can also check to see if something does not equal a specific value with '!==' :
        if (tutor !== "James Bond") {
            console.log("The tutor is not 007")
        }

    //Else statement will set up an alternative action to be performed if the first statement fails
    if (tutor === "James Bond") {
        console.log("The tutor is 007")
    } else {
        console.log("The tutor is not 007")
    }

    //Finally, you can use an 'else if' statement to evaluate a second statement, and an action if it is true or 'truthy'
    if (tutor === "James Bond") {
        console.log("The tutor is 007")
    } else if (tutor === "Matt Pearce") {
        console.log("The tutor is Matt")
    } else {
        console.log("I don't know who the tutor is!")
    }
        //This block of code will print "The tutor is Matt"

    //Switch/case statements work the same way as a long chain of if/else statements, but in a much more compact way.
    //The 'switch' is what you are checking, and the 'case' is what it has to match to perform the specified action.
    //Here's the last block of code, but in a switch/case

    switch (tutor) {
        case "James Bond":
            console.log("The tutor is 007")
            break;
        case "Matt Pearce":
            console.log("The tutor is Matt")
            break;
        default:
            console.log("I don't know who the tutor is!")
            break;
    }
        //In a switch/case, the 'defualt' option comes last, and it's similar to the 'else' in the previous code block
        //If you don't have a 'break', the code will continue to run even if it finds something that satisfies what it's checking, and you may end up with more results than intended
    //Imagine if we had several more possible cases to check. It's not hard to write this in an if/else block, but if we had more, a switch statement would be the way to go


//Loops
    //There's a few types of loops in Javascript, but 'for loops' are the mother of them all.
        //The rest of the loops will be in the folder that expands on data types, as they are methods that can only be performed on arrays
    
    //At the bare bones, a for loop uses a number-type variable called an 'iterator' (often declared as 'i') to perform a certain action multiple times. Here's what that looks like

    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
        //You'll see that the for loop is broken down into 3 separate phrases: 'let i = 1' 'i <= 10' and 'i++' and then you have the {} containing the action to be repeated as the loop continues
            //The first phrase specifies where our iterator starts
            //The second phrase checks the value of i and runs again if it is true (in this case, checks to see if 'i' is less than or equal to 10 using the <= operator)
            //The third phrase specifies what happens to the value of 'i' after each iteration. In this loop, we use the '++' operator, which means we are adding 1 to the current value of 'i' with each iteration
        //This loop will print the numbers 1 through 10 to the console one at a time, each in their own log
            //Our iterator, 'i', will start at 1, then the function will be performed and the current value of 'i' will be printed, then 'i' will be incremented by one before it is repeated, this will happen until the second phrase fails (when i = 11 and is no longer less than or equal to 10)

    //These are very useful for analyzing or utilizing arrays, if one of the other loop methods doesn't fit, or you're doing something so short it simply isn't worth the trouble. The dataTypes guide will explain how you can change the phrases of a for loop to use an array, but here's a sneak peak:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
        //This will print each value in our array variable on line 21 to the console one at a time in separate logs


//ES6 variables
    //The newest version of Javascript, ES6 (short for EcmaScript 6), has some new features, including arrow functions like you saw on line 52, as well as backticks `` that can be used to contain strings in a way that allows them to hold bits of data, great for injecting variables into the content of a website. More on that in the dataTypes guide
    //Another new feature is new types of variables. You saw above we used the 'var' keyword to declare our variables, but there are two newer, better ways:
    const constant = "This will never change"
    let changing = "This will change eventually"
        //The keyword 'const' will set a variable that is a permanent value, at least it's safe to think of it that way for now.
        //The keyword 'let' will set a variable that can be changed later. You saw this in the for loops above. Our iterator 'i' started at 1 and had to be changed over and over again until our loop stopped. if we had used 'const' instead, we would have gotten an error.

    //to change the value of a variable, you would just declare a new value. We use a keyword when we create the variable, and we don't when we change it.
    changing = "This has been changed"
        //Javascript reads from top to bottom, so if you console.log this variable above line 159, it will print "This will change eventually" but anywhere below line 164 and it will print "This has been changed". Like most things, it doesn't stay that simple forever, but that's for later

//Congrats! You now know the basics of Javascript! These are the most common and simple tools that web developers use every single day to build, test and maintain apps.
//Go ahead and move on to the functions.js file for a more in-depth look at basic javascript functions!