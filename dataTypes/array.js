//More on Arrays

const array = ["Matt", "Cameron", "Amy", "Kevin"]

//Referencing data inside an array

    //We got a sneak peak at how to look at values in arrays when we made the for loop in the first guide, and yet another in the guide for more on strings.
    const firstIndex = array[0] //This is the notation we use to look at a value within an array (Remember JS always starts at zero!)

    //As long as what's in the brackets is a numeric value this will work, assuming that value goes with an actual index. Here's what it looks like in a for loop again
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])   //This will print each string to the console one at a time, as 'i' will be incrementing with each pass, so we're really looking at array[0], array[1] etc. until we reach the end
    }

//Simple Array methods
    //push
    array.push("Kari")  //This will reluctantly add a new member to the array leaving us with this:
        array == ["Matt", "Cameron", "Amy", "Kevin", "Kari"]
    array.concat(["Sedona", "Drayton", "Bailey", "Caitlyn"])    //This will combine two arrays into a longer one
    array.findIndex("Amy") //This will return the index of the first vaue to match the argument passed in, in this case: 2

    //Arrays have many more methods, these are the most commonly used

//Functional Loop methods
    //We mentioned there are more kinds of loops that can only be used on arrays, not just for loops: forEach, filter, and map
        // Each functional loop method takes in a special kind of argument known as a 'callback function', which returns a certain set of data or performs a certain task, depending on what method you're using
        // Note: callback functions are very common. Just like the array.push method is built to take in data of any type, functional loops, as well as many other functions in more advanced parts of JS, require a function to be passed in. Don't worry about why, that's just how they're made to work
            //They're also anonymous, meaning they don't have to be given a name, since they aren't run by being called, but by the method that contains them being executed

    //forEach is the method that is most similar to a for loop, it executes a function you declare on every index of the array
    array.forEach(i => {                     // Note: arrow functions work great as callbacks. they're short, and they don't need parens wrapped around their parameter/argument if there's only one of them
        console.log(`${i} is in the array.`) //This will print the sentence with each name in our array
    })

    //Map and filter are a little bit different, their callback functions don't execute anything, rather they return a new array. So when using these methods, it's better to save them as a variable unless you're calling the method in the exact spot you need to plug in the new data

    //filter is pretty intuitive, it filters the array and leaves only the values that comply with the condition created in your callback function
        // The callback function will need to return a boolean after analyzing each index. The ones where it returns true stay in the new array.
    const kArray = array.filter(i => i.charAt(0) == 'K') //This will save a new array containing only the names that begin with the letter K. What we're left with is pretty toxic:
        kArray == ["Kevin", "Kari"]
        //Take a closer look at the callback function, this one doesn't even have curly brackets {} around the code that executes. If an arrow function is only performing a return based on a single phrase or value, you don't need to have any {} around the function
            //This works here because we are checking the value of the character in our string, and comparing it to another string using an operator, a phrase that will return true or false by default

    //Like filter, map also returns rather than executes, but differently. Rather than removing values, it manipulates them however you like
    const mappedArr = array.map(i => {
        return {
            name: i
        }
    })
        //mappedArr will now be an array of objects, each with a single 'name' property, which will be given a value of the original data in each index, in this case the name as a string.
            //I don't feel like typing that out so here:
            console.log(mappedArr); //if you want to see just figure out how to run a javascript file I don't care this is taking forever.



