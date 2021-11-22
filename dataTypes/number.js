// More on numbers

//Math prototype

    //The 'Math' prototype can be used to do mathematical operations. We already have operators that can do most of that, so we'll just focus on two methods.

    console.log(Math.random()) //Math.random will return a random decimal between 0 and 1. We can multiply it by anything if we want to expand the range of numbers, but we'll do that in a sec...

    console.log(Math.floor(3.14)) //What if we need a whole number? Math.floor takes in a decimal value and rounds it down (always down) to the next whole number. This line will log 2 to the console

    //So here's a question.. what if you want a random number between 1 and 10? You will need to use both of these
    console.log(Math.floor(Math.random() * 10 + 1))
        //First, we generate the random decimal, and multiply it by 10. Our range will be between 0.0001 and 9.999, so if we use Math.floor on that, we'll get a number from 0 to 9
        //All we have to do is add 1 to the result of the random number and we're all set!

//Methods
//As far as handling data goes, the only method that's relevant is the toString method, which basically takes a numeric value and wraps it in quotes, making it a string.
    //Newer versions of javascript will handle numbers as strings if you try to combine them, so you won't even need to worry about that!

//Of course, there's also the opposite method, "parseInt"
const num = "69"
console.log(parseInt(num)) //This will print 69, but as a number rather than a string. 
    // Note: this isn't called the way other methods are (variable.method()) because parseInt is a vanilla function that doesn't just exist for any one data type

//Any other methods you need are rarely used, and you'll find them easily when researching how to perform certain tasks where they're actually needed.