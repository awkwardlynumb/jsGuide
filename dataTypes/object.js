// More on Objects

//We'll be using a relatively complex object to demonstrate how to use everything in it
let object = {
    name: 'Matt',
    age: 26,
    family: [
        {
            relation: "Mom",
            name: "Amy"
        },
        {
            relation: "Dad",
            name: "Kevin"
        },
        {
            relation: "Brother",
            name: "Cameron"
        }
    ],
    history: {
        born: {
            year: 1995,
            city: "Nashville"
        },
        school: 'University of Arizona',
        currentJob: 'NodeJS Developer'
    },
    isBetterLookingThanBrother: true
}

// Using objects and their properties
    // Objects are what we use to hold most of our data, particularly complex sets of data that we get from a database or third party, and some of that data can get pretty detailed so we'll have to know how to get into them
    // Here's a more complex data path, we'll get the birth city from the object above
    console.log(object.history.born.city);
        //Here's what this says, it's easiest to explain in reverse:
            //city is a property of the object called 'born', which is a property of the 'history' object, which is a property of the 'object' variable.
    
    //When we have an object and we need to reference one of it's properties, we use a '.' after the name of the object to specify the name of the property we want. This can be chained as many times as possible, as long as we're referencing something that actually exists

    //It can also be chained with references to arrays. Let's grab the name of the first member of the family like this:
    console.log(object.family[0].name) // This will print Amy to the console
        //Because each index of the 'family' array is an object, we can access their properties like we would with any other object

// Quick demo:
    //Here, we'll do a multi-step function that makes a short paragraph describing each member of the family using template literals
    function describeFam(data) {                                                // We're using a parameter called 'data' so this function can be applied to any object usint this format
        let text = ""                                                           //declare an empty string that we can add to later
        for (let i = 0; i < data.family.length; i++) {                          //loop over the 'family' array by its length so it doesn't matter how many indexes it has
            const memName = data.family[i].name                                 //each time the loop runs, we'll save the name of the family member as a variable
            const memRel = data.family[i].relation                              //same with the relation
            text += `${data.name}'s ${memRel.toLowerCase()} is ${memName}.`     //now that we've got our data saved in an easy to use way, we just put a string together and add it to the end of the 'text' string using the += operator (Surprise! This is new. += just adds a certain value to the existing value of a variable, and can be applied to both strings and numbers, but works best for concatonating strings)
        }
        text += `What a nice family!`
        return text                                                             //once our loop finishes, we know we've made the string with the data from each family member
    }

    //I'd go into detail about th toLowerCase string method but um... take a wild guess lul
    //Now, we just need to call the function with a specific object
    console.log(describeFam(object))
        //We call the function and pass in the object we declared above, immediately printing whatever is returned to the console. Here's what it will say:
        //Matt's mom is Amy. Matt's dad is Kevin. Matt's brother is Cameron. What a nice family!
        //Despite not being truthful in any way (we're incredibly dysfunctional), We've built a paragraph of coherent sentences by accessing our data, using the toLowerCase method to correct some grammar, and this is just on of the ways you'll use the data stored in objects to generate and define content for a website

// this
    // In JS, the keyword 'this' refers to the object that contains the current location of wherever you use the term. We can use this to define new properties of the object that depend on ones we've already made
    // Example
    const newObj = {
        arr: ["index", "index", "index", "index"],  //make a property that's just an array
        arrLength: this.arr.length                  //make a property that looks at the existing 'arr' property and gives the length
    }   //Fun fact: this is a pretty common example. Think of a blog. Each post is stored as an object, the multiple comments would be an array, and the number of comments would be stored as a number referencing that array. We do it this way so we don't have to waste time in our app doing the math every time we display a post on the page.

// Methods: Continued
    //Methods, as we learned earlier, can be applied as functions to certain data types, respectively. But you may notice some similarities between referencing these and properties of objects
    //Take a look:
    const mattName = object.name              //references the name property of the object created above (string value)
    const nameLeng = mattName.toLowerCase()   //calls the toLowerCase method to make the all letters in the string lowercase

    // They both use 'dot' notation, so what does this mean? Are these methods properties of an object that represents our single string value? Duh.
    
    //All the data types have an object called a 'prototype' that essentially stores all of the properties and method functions that can be used on variables of that type.
    //No need to demo this, prototypes are uber complicated. The moral of this is that objects can contain functions, and any function that exists as part of an object would be referred to as a Method
    //Shall we?
        //We're going to add a method to our object that makes the object say it's name

        object.sayname = function() {
            console.log(this.name);
        }

        //We've now given our object a new property called sayName, that's defined as a function that prints the value of the name property to the console. Let's run it

        object.sayname()    //This will print Matt
