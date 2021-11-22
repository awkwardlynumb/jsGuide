// More on Strings

const string = "Matt Pearce"

// Aside from objects, which are typically used to hold most of the data you'll be working with, the most common data type is strings
// This is because most of the content visible on web apps, and most of the data used in them, is just text. there are plenty of ways strings can be manipulated. The first is concatenation

// Concatenating strings
    // In the index.js guide, lines 61-63, we saw that if you try to add numbers together, but one of the numbers is actually saved as a string, it will add the numbers together not as a sum, but by tacking one onto the other. This is an example of concatonation
    console.log("69" + 5) //This will print 695 to the console, because JS doesn't know it should be doing math if it's not dealing with only numbers
    //Here's another example:
    console.log("The tutor is " + string) //This will add our 'string' variable to the end of the first string, and print "The tutor is Matt Pearce"
        //Notice we had to make a space at the end of the first string, JS takes things very literally, and it won't know to separate words by itself
    
    //Now, with ES6, we can use backticks (``) to make concatenation a lot easier
    console.log(`The tutor is ${string}`) //This will perform the same way as the last log, and inject the string variable into the larger string using a 'Template Literal'
        //A template literal is a new feature where we simply wrap a variable in {} preceded by a $, and inject it into a string
        //This can ONLY be used when we create the string using backticks
    
    //Template literals are very useful. Let's say you're putting content on a webpage, and you have to use some data that comes from variables in your code. You can easily use template literals to plug in the variables to the prebuilt string, and it will build it all together when you tell it to.


//Methods
    //Strings have a lot of methods associated, but here we'll just cover 2 of them: charAt, and length.
    // arr[0]
    // charAt(0)
    //charAt will return a letter, based on what position you give it inside the parens.
    console.log(string.charAt(0)) //Remember what we said about arrays in the first guide: they always start counting at zero. The same goes for the characters in strings
        // This will print "M" to the console, as it is the first letter in the string
        // This can be very useful if you want to analyze or manipulate strings. Let's say you have a database of names, but it's all lowercase, and you want to capitalize the first letter of every one of them before putting them on the page.
        // You can use the charAt method as part of a function that takes the first letter of any given string and makes it a capital. (There are other ways of doing this, too, but it's just an example)
    
    //The length property is just what it sounds like, it gives us the amount of characters in the string in total.
    console.log(string.length) //This will print 11 to the console
        //Notice that we're not calling .length a method, but a property, and it doesn't have any parens after it. This is because 'length' is simply a property that all strings (and arrays) have at their root level, rather than a function that returns a certain value. This will make more sense after learning more about objects

    //includes() will check one string to see if it contains another string in its entirety
        //returns a boolean
    console.log(string.includes("Matt")) // This will print true to the console